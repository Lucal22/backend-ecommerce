import { SubmitProductUseCase } from "./submit-product-use-case";

const createSubmitSpy = jest.fn();

const submitFeedback = new SubmitProductUseCase(
    {create: createSubmitSpy},
)

describe('Submit Product',()=>{
    it('should be able to submit a product',async ()=>{
        
        await expect(submitFeedback.execute({
            name: 'iphone',
            brand: 'apple',
            category: 'technology',
            type: 'phone',
            image: 'iasdjaiosd.jpg',
            description: 'Its a phone but expensive',
            price: '300',
            qtd: 5
    })).resolves.not.toThrow();

        expect(createSubmitSpy).toHaveBeenCalled();
})

    it('should not be able to submit a product', async ()=>{
        
        await expect(submitFeedback.execute({
            name: '',
            brand: 'apple',
            category: 'technology',
            type: 'phone',
            image: 'iasdjaiosd.jpg',
            description: 'Its a phone but expensive',
            price: '300',
            qtd: 5
        })).resolves.toThrow()
    })

})