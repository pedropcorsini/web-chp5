export default function ErrorState({ mensagem }) {
    return (
        <div>
            <strong>Erro ao carregar os dados</strong>
            <p>{mensagem}</p>
        </div>
    );
}
