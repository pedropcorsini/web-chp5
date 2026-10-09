import ListItem from "./ListItem";

export default function List({ agentes }) {
    if (agentes.length === 0) {
        return <p>Nenhum agente encontrado.</p>;
    }

    return (
        <ul>
            {agentes.map((agente) => (
                <ListItem key={agente.uuid} agente={agente} />
            ))}
        </ul>
    );
}