import Link from "next/link";

export default function ListItem({ agente }) {
    return (
        <li>
            <Link href={`/details/${agente.uuid}`}>
                <img src={agente.displayIconSmall} alt={agente.displayName} width={48} />
                <strong>{agente.displayName}</strong> - {agente.role.displayName}
            </Link>
        </li>
    );
}
