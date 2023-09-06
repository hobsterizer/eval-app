"use client";
import {
    DonutChart,
    AreaChart,
    BarChart,
    Subtitle,
    Card,
    Metric,
    Title,
    BadgeDelta,
    Text,
    Button,
    Accordion,
    AccordionHeader,
    AccordionBody,
    AccordionList,
} from "@tremor/react";
import { useRouter } from "next/navigation";
import { PRODUCTS } from "../page";
function ProductDetails({ params }) {
    const router = useRouter();
    const product = PRODUCTS.find((e) => e.id === params.productId);
    const valueFormatter = (number) =>
        `$ ${Intl.NumberFormat("us").format(number).toString()}`;

    return (
        <div className="flex flex-col gap-5 items-center">
            <div className="flex flex-col lg:flex-row items-center gap-5 w-11/12 mt-10 justify-between">
                <div className="flex flex-col gap-5 lg:w-1/2">
                    <Button
                        className="w-60 h-10 self-center"
                        color="indigo"
                        size="md"
                        onClick={() => {
                            router.push("/products");
                        }}
                    >
                        Back
                    </Button>
                    <AccordionList className="w-full">
                        <Accordion>
                            <AccordionHeader>
                                Product Description
                            </AccordionHeader>
                            <AccordionBody>{product.description}</AccordionBody>
                        </Accordion>
                        <Accordion>
                            <AccordionHeader>
                                Product Specifications
                            </AccordionHeader>
                            <AccordionBody>
                                {product.specifications}
                            </AccordionBody>
                        </Accordion>
                    </AccordionList>
                </div>
                <Card key={product.id} className="flex lg:w-1/2">
                    <img
                        className="w-1/3 object-cover"
                        src={product.img}
                        alt={product.title}
                    />
                    <div className="flex flex-col w-full">
                        <Title className="mr-5 mt-3 self-end">
                            {product.title}
                        </Title>
                        <div className="flex flex-row justify-between mt-20 ml-4">
                            <Text>Sales</Text>
                            <BadgeDelta deltaType={product.salesRate[0]}>
                                {product.salesRate[1]}
                            </BadgeDelta>
                        </div>
                        <Metric className="ml-4">${product.totalSales}</Metric>
                    </div>
                </Card>
            </div>
            <div className="flex flex-col gap-5 w-11/12">
                <div className="flex flex-col lg:flex-row gap-5">
                    <Card className="flex flex-col gap-8 justify-between lg:w-1/2">
                        <Title>Sales demographics</Title>
                        <DonutChart
                            className="mb-24 scale-150 "
                            data={product.demographics}
                            category="sales"
                            index="name"
                            valueFormatter={valueFormatter}
                            colors={[
                                "slate",
                                "violet",
                                "indigo",
                                "rose",
                                "cyan",
                                "amber",
                            ]}
                        />
                    </Card>
                    <Card className="flex flex-col lg:w-1/2">
                        <Title>Sales for Each province (2021-2023)</Title>
                        <Subtitle>
                            This data is considering provinces where the product
                            was sold in the refered years.
                        </Subtitle>
                        <BarChart
                            className="mt-6"
                            data={product.provinceSales}
                            index="name"
                            categories={["Sales for Province"]}
                            colors={["blue"]}
                            valueFormatter={valueFormatter}
                            yAxisWidth={48}
                        />
                    </Card>
                </div>
                <div>
                    <Card>
                        <Title>Sales revenue over time (USD)</Title>
                        <AreaChart
                            className="h-72 mt-4"
                            data={product.salesData}
                            index="Month"
                            categories={["Sales", "Profit"]}
                            colors={["indigo", "cyan"]}
                            valueFormatter={valueFormatter}
                        />
                    </Card>
                </div>
            </div>
        </div>
    );
}
export default ProductDetails;
