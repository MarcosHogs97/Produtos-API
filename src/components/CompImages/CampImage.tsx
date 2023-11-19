import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
// Para tornar o componente < Image /> responsivo ao tamanho do seu contêiner, você pode usar a propriedade layout com o 
// valor "responsive".A propriedade layout determina como a imagem é dimensionada e exibida.Configurá - la como "responsive" 
// permite que a imagem se ajuste ao tamanho do seu contêiner pai.

export default function ImagemResponsiva(props: { images: string | StaticImport }) {
    return (
        <div style={{ maxWidth: '800px', margin: 'auto' }}>
            {/* Defina maxWidth e margin para fins ilustrativos */}
            <Image
                alt="Montanhas"
                src={props.images}
                layout="responsive"
                width={1920}
                height={1080} // É necessário fornecer a proporção de aspecto (largura:altura)
            />
        </div>
    )
}
// Neste exemplo, a propriedade layout está configurada como "responsive", e você precisa fornecer as props width e height com a proporção de aspecto da imagem.Ajuste os valores de width e height de acordo com a proporção de aspecto da sua imagem.
// Lembre - se de especificar a largura máxima do contêiner para garantir que a imagem não ultrapasse um determinado tamanho, e defina margin: auto para centralizar o contêiner.
// Dessa forma, a imagem se adaptará ao tamanho do seu contêiner mantendo a proporção de aspecto especificada, proporcionando um comportamento responsivo.