
import {
    Card,
    Button,
    Accordion,
    AccordionHeader,
    AccordionBody,
    AccordionList,
} from "@tremor/react";
function Loading() {
    return (
        <div className="flex flex-col gap-5 items-center">
            <div className="flex flex-col lg:flex-row items-center gap-5 w-11/12 mt-10 justify-between">
                <div className="flex flex-col gap-5 lg:w-1/2">
                    <Button
                        className="w-60 h-10 self-center"
                        color="indigo"
                        size="md"
                    >
                        Back
                    </Button>
                    <AccordionList className="w-full">
                        <Accordion>
                            <AccordionHeader>
                                Product Description
                            </AccordionHeader>
                            <AccordionBody></AccordionBody>
                        </Accordion>
                        <Accordion>
                            <AccordionHeader>
                                Product Specifications
                            </AccordionHeader>
                            <AccordionBody></AccordionBody>
                        </Accordion>
                    </AccordionList>
                </div>
                <Card className="animate-pulse flex h-64 lg:w-1/2"></Card>
            </div>
            <div className="flex flex-col gap-5 w-11/12">
                <div className="flex flex-col lg:flex-row gap-5">
                    <Card className="animate-pulse flex flex-col gap-8 h-96 justify-between lg:w-1/2"></Card>
                    <Card className="animate-pulse flex flex-col h-96 lg:w-1/2"></Card>
                </div>
                <div>
                    <Card className="animate-pulse h-96"></Card>
                </div>
            </div>
        </div>
    );
}
export default Loading;
