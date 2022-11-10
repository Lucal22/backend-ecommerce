
interface SubmitProductUseCaseRequest {
    name: string;
    description: string;
    image: string;
    price: string;
    qtd: number;
}

export async function SubmitProductUseCase({name, description, image, price, qtd}: SubmitProductUseCaseRequest) {
    if(!name || !description || !image || !price || !qtd){
        throw new Error('All informations are required')
    }

}
