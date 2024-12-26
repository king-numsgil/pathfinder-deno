import { Badge, Button, Group, LoadingOverlay, Modal, Text, Title } from "@mantine/core";
import { useDisclosure, useMounted } from "@mantine/hooks";
import { useNavigate, useParams } from "react-router-dom";
import { useSuspenseQuery } from "@tanstack/react-query";

// @ts-types="@types/react"
import { type FC, Suspense, useEffect } from "react";

import { singleSpellFetcher } from "@/client.tsx";

const SpellModalContent: FC<{ spellId: string }> = ({ spellId }) => {
    const { data: spell } = useSuspenseQuery({
        queryKey: ["spell", spellId],
        queryFn: () => singleSpellFetcher(spellId),
    });

    if (Array.isArray(spell)) {
        return null;
    }

    return (
        <>
            <Title order={2}>{spell.name}</Title>
            <Text mb="xs">
                {spell.school?.name} {spell.subschool && `(${spell.subschool.name})`}
                {spell.descriptors.length > 0 && ` [${spell.descriptors.join(", ")}]`}
            </Text>
            <Group gap="xs" mb="sm">
                {spell.classes.map((value, index) => (
                    <Badge key={index} size="xs" bg="rose.4" color="black">
                        {value.class.name} {value.spellLevel}
                    </Badge>
                ))}
            </Group>
            {spell.domains && spell.domains.length > 0 && (
                <Text mb={0}>
                    Domain: {spell.domains.map((v) => `${v.domain.name} (${v.spellLevel})`).join(", ")}
                </Text>
            )}
            {spell.subdomains && spell.subdomains.length > 0 && (
                <Text mb={0}>
                    Subdomain: {spell.subdomains.map((v) => `${v.subdomain.name} (${v.spellLevel})`).join(", ")}
                </Text>
            )}
            {spell.bloodlines && spell.bloodlines.length > 0 && (
                <Text mb={0}>
                    Bloodline: {spell.bloodlines.map((v) => `${v.bloodline.name} (${v.classLevel})`).join(", ")}
                </Text>
            )}
            {spell.patrons && spell.patrons.length > 0 && (
                <Text mb={0}>
                    Patron: {spell.patrons.map((v) => `${v.patron.name} (${v.classLevel})`).join(", ")}
                </Text>
            )}
            {spell.mysteries && spell.mysteries.length > 0 && (
                <Text mb={0}>
                    Mystery: {spell.mysteries.map((v) =>
                        `${v.mystery.name} (${v.classLevel}) ${v.note === null ? "" : `(${v.note})`}`
                    ).join(", ")}
                </Text>
            )}
            <Text mb={0}>Casting Time: {spell.castingTime}</Text>
            {spell.targets !== null && <Text mb={0}>Target: {spell?.targets}</Text>}
            <Text mb={0}>Range: {spell.range}</Text>
            {spell.area && <Text mb={0}>Area: {spell.area}</Text>}
            <Text mb={0}>Duration: {spell.duration} {spell.dismissible && "[D]"}</Text>
            <Text mb={0}>Saving Throw: {spell.savingThrow ?? "none"}</Text>
            <Text mb={0}>Spell Resistance: {spell.spellResistance ?? "no"}</Text>
            <Group gap="xs" mb="xs">
                {spell.somatic && <Badge size="xs" bg="yellow.4" color="black">Somatic</Badge>}
                {spell.verbal && <Badge size="xs" bg="yellow.4" color="black">Verbal</Badge>}
                {spell.material && (
                    <Badge size="xs" bg="blue.4" color="black">
                        Material {spell.componentCost !== null && `${spell.componentCost}gp`}
                    </Badge>
                )}
                {spell.focus && <Badge size="xs" bg="blue.4" color="black">Focus</Badge>}
                {spell.divineFocus && <Badge size="xs" bg="blue.4" color="black">Divine Focus</Badge>}
            </Group>

            <Text c="dimmed">{spell.description}</Text>
            {spell.mythicText && <Text c="dimmed"><strong>Mythic</strong>: {spell.mythicText}</Text>}
            {spell.augmented && <Text c="dimmed"><strong>Augmented</strong>: {spell.augmented}</Text>}

            <Group justify="space-between" mt="sm">
                <Text>Sourcebook: {spell.sourcebook}</Text>
                {spell.link && <Button bg="warning.2" component="a" href={spell.link} target="_blank">Archive of Nethys</Button>}
            </Group>
        </>
    );
};

export const SpellSingle: FC = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const { spellId } = useParams<{ spellId: string }>();
    const navigate = useNavigate();

    const isMounted = useMounted();

    useEffect(() => {
        if (isMounted) {
            open();
        } else {
            close();
        }
    }, [isMounted, open, close]);

    return (
        <Modal
            opened={opened}
            onClose={() => {
                close();
                navigate("/pathfinder/spells");
            }}
            size="lg"
            withCloseButton={false}
        >
            <Suspense fallback={<LoadingOverlay visible />}>
                <SpellModalContent spellId={spellId ?? ""} />
            </Suspense>
        </Modal>
    );
};
