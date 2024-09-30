import BabyPlaying from '@/assets/baby-playing.png'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../molecules/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../atoms/accordion'

export default function FaqSection () {
    return (
        <section className="grid grid-cols-2 gap-8 p-16 bg-white">
            <div className="flex flex-col gap-3">
                <h3 className="text-4xl text-gray-600 font-bold">Perguntas Frequentes</h3>
                <p className="text-lg max-w-2xl">
                    Entendemos que podem surgir dúvidas ao escolher a melhor educação para o seu filho. Por isso, reunimos as respostas para as perguntas mais comuns sobre nossos serviços e estrutura. Se não encontrar o que procura, entre em contato conosco. Estamos aqui para ajudar!
                </p>
                <Tabs defaultValue="account" className="">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="ensino">Ensino</TabsTrigger>
                        <TabsTrigger value="transporte">Transporte Escolar</TabsTrigger>
                        <TabsTrigger value="nutricao">Nutrição</TabsTrigger>
                    </TabsList>
                    <TabsContent value="ensino">
                         <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Lorem ipsum?</AccordionTrigger>
                                <AccordionContent>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus modi quis id, aspernatur libero est quos illo ipsam, molestias ullam tenetur architecto corrupti at sequi veniam, laborum tempore nemo error.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Lorem ipsum?</AccordionTrigger>
                                <AccordionContent>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus modi quis id, aspernatur libero est quos illo ipsam, molestias ullam tenetur architecto corrupti at sequi veniam, laborum tempore nemo error.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Lorem ipsum?</AccordionTrigger>
                                <AccordionContent>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus modi quis id, aspernatur libero est quos illo ipsam, molestias ullam tenetur architecto corrupti at sequi veniam, laborum tempore nemo error.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </TabsContent>
                    <TabsContent value="transporte">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Lorem ipsum?</AccordionTrigger>
                                <AccordionContent>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus modi quis id, aspernatur libero est quos illo ipsam, molestias ullam tenetur architecto corrupti at sequi veniam, laborum tempore nemo error.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Lorem ipsum?</AccordionTrigger>
                                <AccordionContent>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus modi quis id, aspernatur libero est quos illo ipsam, molestias ullam tenetur architecto corrupti at sequi veniam, laborum tempore nemo error.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Lorem ipsum?</AccordionTrigger>
                                <AccordionContent>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus modi quis id, aspernatur libero est quos illo ipsam, molestias ullam tenetur architecto corrupti at sequi veniam, laborum tempore nemo error.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </TabsContent>
                    <TabsContent value="nutricao">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Lorem ipsum?</AccordionTrigger>
                                <AccordionContent>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus modi quis id, aspernatur libero est quos illo ipsam, molestias ullam tenetur architecto corrupti at sequi veniam, laborum tempore nemo error.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Lorem ipsum?</AccordionTrigger>
                                <AccordionContent>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus modi quis id, aspernatur libero est quos illo ipsam, molestias ullam tenetur architecto corrupti at sequi veniam, laborum tempore nemo error.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Lorem ipsum?</AccordionTrigger>
                                <AccordionContent>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus modi quis id, aspernatur libero est quos illo ipsam, molestias ullam tenetur architecto corrupti at sequi veniam, laborum tempore nemo error.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </TabsContent>
                </Tabs>
            </div>
            <img src={BabyPlaying} alt="Baby playing"/>
        </section>
    )
}