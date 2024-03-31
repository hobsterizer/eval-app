import Link from "next/link";
import { Card, Title, Text, Metric, BadgeDelta } from "@tremor/react";
export const PRODUCTS = [
    {
        id: "p1",
        title: "Watch 1",
        img: "https://ae01.alicdn.com/kf/HTB11ROtcByWBuNkSmFPq6xguVXaA/Switzerland-BINGER-Men-Watch-Fashion-Brand-Automatic-Mechanical-Mens-Watches-Steel-Male-Japan-Movement-relogio-masculino.jpg",
        totalSales: 22440,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor lorem non est congue blandit. Praesent non lorem sodales, suscipit est sed, hendrerit dolor.",
        specifications:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor lorem non est congue blandit. Praesent non lorem sodales, suscipit est sed, hendrerit dolor.",
        salesRate: ["moderateIncrease", "+12.3%"],
        salesData: [
            {
                Month: "Jan 21",
                Sales: 2890,
                Profit: 2400,
            },
            {
                Month: "Jul 21",
                Sales: 1890,
                Profit: 1398,
            },
            {
                Month: "Jan 22",
                Sales: 3890,
                Profit: 2980,
            },
            {
                Month: "Jul 22",
                Sales: 2890,
                Profit: 2400,
            },
            {
                Month: "Jan 23",
                Sales: 1890,
                Profit: 1398,
            },
            {
                Month: "Jul 23",
                Sales: 3890,
                Profit: 2980,
            },
        ],
        demographics: [
            {
                name: "Kids",
                sales: 1825,
            },
            {
                name: "Teens",
                sales: 4967,
            },
            {
                name: "Adults",
                sales: 11948,
            },
            {
                name: "Elderly",
                sales: 3700,
            },
        ],
        provinceSales: [
            {
                name: "Cairo",
                "Sales for Province": 2488,
            },
            {
                name: "Alexandria",
                "Sales for Province": 1445,
            },
            {
                name: "Sinai",
                "Sales for Province": 743,
            },
            {
                name: "Giza",
                "Sales for Province": 1445,
            },
            {
                name: "Aswan",
                "Sales for Province": 743,
            },
        ],
    },
    {
        id: "p2",
        title: "Watch 2",
        img: "https://i.pinimg.com/originals/ab/b1/0e/abb10e49a8e12a7726201f1162754553.jpg",
        totalSales: 17000,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor lorem non est congue blandit. Praesent non lorem sodales, suscipit est sed, hendrerit dolor.",
        specifications:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor lorem non est congue blandit. Praesent non lorem sodales, suscipit est sed, hendrerit dolor.",
        salesRate: ["moderateIncrease", "+12.3%"],
        salesData: [
            {
                Month: "Jan 21",
                Sales: 2890,
                Profit: 2400,
            },
            {
                Month: "Jul 21",
                Sales: 1890,
                Profit: 1398,
            },
            {
                Month: "Jan 22",
                Sales: 3890,
                Profit: 2980,
            },
            {
                Month: "Jul 22",
                Sales: 7690,
                Profit: 2400,
            },
            {
                Month: "Jan 23",
                Sales: 1690,
                Profit: 1398,
            },
            {
                Month: "Jul 23",
                Sales: 4390,
                Profit: 2980,
            },
        ],
        demographics: [
            {
                name: "Teens",
                sales: 3967,
            },
            {
                name: "Adults",
                sales: 5908,
            },
            {
                name: "Elderly",
                sales: 2765,
            },
        ],
        provinceSales: [
            {
                name: "Cairo",
                "Sales for Province": 2488,
            },
            {
                name: "Alexandria",
                "Sales for Province": 1445,
            },
            {
                name: "Sinai",
                "Sales for Province": 743,
            },
            {
                name: "Giza",
                "Sales for Province": 1445,
            },
            {
                name: "Aswan",
                "Sales for Province": 743,
            },
        ],
    },
    {
        id: "p3",
        title: "Watch 3",
        img: "https://ae01.alicdn.com/kf/HTB1zVDFaN2rK1RkSnhJq6ykdpXaE/Cool-3D-Curved-Glass-Men-Brand-Fashion-Business-Watches-Self-Winding-Mechanical-Calendar-Watch-Waterproof-Real.jpg_640x640.jpg",
        totalSales: 8475,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor lorem non est congue blandit. Praesent non lorem sodales, suscipit est sed, hendrerit dolor.",
        specifications:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor lorem non est congue blandit. Praesent non lorem sodales, suscipit est sed, hendrerit dolor.",
        salesRate: ["moderateIncrease", "+12.3%"],
        salesData: [
            {
                Month: "Jan 21",
                Sales: 2890,
                Profit: 2400,
            },
            {
                Month: "Jul 21",
                Sales: 1890,
                Profit: 1398,
            },
            {
                Month: "Jan 22",
                Sales: 3890,
                Profit: 2980,
            },
            {
                Month: "Jul 22",
                Sales: 2890,
                Profit: 2400,
            },
            {
                Month: "Jan 23",
                Sales: 1890,
                Profit: 1398,
            },
            {
                Month: "Jul 23",
                Sales: 3890,
                Profit: 2980,
            },
        ],
        demographics: [
            {
                name: "Teens",
                sales: 4567,
            },
            {
                name: "Adults",
                sales: 3908,
            },
        ],
        provinceSales: [
            {
                name: "Cairo",
                "Sales for Province": 2488,
            },
            {
                name: "Alexandria",
                "Sales for Province": 1445,
            },
            {
                name: "Sinai",
                "Sales for Province": 743,
            },
            {
                name: "Giza",
                "Sales for Province": 1445,
            },
            {
                name: "Aswan",
                "Sales for Province": 743,
            },
        ],
    },
];
export const PRODUCTS2 = [
    {
        id: "p4",
        title: "Watch 4",
        img: "  https://i.pinimg.com/originals/ab/b1/0e/abb10e49a8e12a7726201f1162754553.jpg",
        totalSales: 22440,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor lorem non est congue blandit. Praesent non lorem sodales, suscipit est sed, hendrerit dolor.",
        specifications:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor lorem non est congue blandit. Praesent non lorem sodales, suscipit est sed, hendrerit dolor.",
        salesRate: ["moderateIncrease", "+12.3%"],
        salesData: [
            {
                Month: "Jan 21",
                Sales: 2890,
                Profit: 2400,
            },
            {
                Month: "Jul 21",
                Sales: 1890,
                Profit: 1398,
            },
            {
                Month: "Jan 22",
                Sales: 3890,
                Profit: 2980,
            },
            {
                Month: "Jul 22",
                Sales: 2890,
                Profit: 2400,
            },
            {
                Month: "Jan 23",
                Sales: 1890,
                Profit: 1398,
            },
            {
                Month: "Jul 23",
                Sales: 3890,
                Profit: 2980,
            },
        ],
        demographics: [
            {
                name: "Kids",
                sales: 1825,
            },
            {
                name: "Teens",
                sales: 4967,
            },
            {
                name: "Adults",
                sales: 11948,
            },
            {
                name: "Elderly",
                sales: 3700,
            },
        ],
        provinceSales: [
            {
                name: "Cairo",
                "Sales for Province": 2488,
            },
            {
                name: "Alexandria",
                "Sales for Province": 1445,
            },
            {
                name: "Sinai",
                "Sales for Province": 743,
            },
            {
                name: "Giza",
                "Sales for Province": 1445,
            },
            {
                name: "Aswan",
                "Sales for Province": 743,
            },
        ],
    },
    {
        id: "p5",
        title: "Watch 5",
        img: "   https://ae01.alicdn.com/kf/HTB1zVDFaN2rK1RkSnhJq6ykdpXaE/Cool-3D-Curved-Glass-Men-Brand-Fashion-Business-Watches-Self-Winding-Mechanical-Calendar-Watch-Waterproof-Real.jpg_640x640.jpg",
        totalSales: 17000,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor lorem non est congue blandit. Praesent non lorem sodales, suscipit est sed, hendrerit dolor.",
        specifications:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor lorem non est congue blandit. Praesent non lorem sodales, suscipit est sed, hendrerit dolor.",
        salesRate: ["moderateIncrease", "+12.3%"],
        salesData: [
            {
                Month: "Jan 21",
                Sales: 2890,
                Profit: 2400,
            },
            {
                Month: "Jul 21",
                Sales: 1890,
                Profit: 1398,
            },
            {
                Month: "Jan 22",
                Sales: 3890,
                Profit: 2980,
            },
            {
                Month: "Jul 22",
                Sales: 7690,
                Profit: 2400,
            },
            {
                Month: "Jan 23",
                Sales: 1690,
                Profit: 1398,
            },
            {
                Month: "Jul 23",
                Sales: 4390,
                Profit: 2980,
            },
        ],
        demographics: [
            {
                name: "Teens",
                sales: 3967,
            },
            {
                name: "Adults",
                sales: 5908,
            },
            {
                name: "Elderly",
                sales: 2765,
            },
        ],
        provinceSales: [
            {
                name: "Cairo",
                "Sales for Province": 2488,
            },
            {
                name: "Alexandria",
                "Sales for Province": 1445,
            },
            {
                name: "Sinai",
                "Sales for Province": 743,
            },
            {
                name: "Giza",
                "Sales for Province": 1445,
            },
            {
                name: "Aswan",
                "Sales for Province": 743,
            },
        ],
    },
    {
        id: "p6",
        title: "Watch 6",
        img: "https://ae01.alicdn.com/kf/HTB11ROtcByWBuNkSmFPq6xguVXaA/Switzerland-BINGER-Men-Watch-Fashion-Brand-Automatic-Mechanical-Mens-Watches-Steel-Male-Japan-Movement-relogio-masculino.jpg",
        totalSales: 8475,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor lorem non est congue blandit. Praesent non lorem sodales, suscipit est sed, hendrerit dolor.",
        specifications:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor lorem non est congue blandit. Praesent non lorem sodales, suscipit est sed, hendrerit dolor.",
        salesRate: ["moderateIncrease", "+12.3%"],
        salesData: [
            {
                Month: "Jan 21",
                Sales: 2890,
                Profit: 2400,
            },
            {
                Month: "Jul 21",
                Sales: 1890,
                Profit: 1398,
            },
            {
                Month: "Jan 22",
                Sales: 3890,
                Profit: 2980,
            },
            {
                Month: "Jul 22",
                Sales: 2890,
                Profit: 2400,
            },
            {
                Month: "Jan 23",
                Sales: 1890,
                Profit: 1398,
            },
            {
                Month: "Jul 23",
                Sales: 3890,
                Profit: 2980,
            },
        ],
        demographics: [
            {
                name: "Teens",
                sales: 4567,
            },
            {
                name: "Adults",
                sales: 3908,
            },
        ],
        provinceSales: [
            {
                name: "Cairo",
                "Sales for Province": 2488,
            },
            {
                name: "Alexandria",
                "Sales for Province": 1445,
            },
            {
                name: "Sinai",
                "Sales for Province": 743,
            },
            {
                name: "Giza",
                "Sales for Province": 1445,
            },
            {
                name: "Aswan",
                "Sales for Province": 743,
            },
        ],
    },
];
function Page() {

    return (
        <div className="flex flex-col lg:flex-row items-center gap-3 w-full justify-center">
            <div className="flex flex-col items-center gap-2 mt-10">
                {PRODUCTS.map((product) => (
                    <Card key={product.id} className="max-w-xl self-center">
                        <Link
                            href={"/products/" + product.id}
                            className="flex overflow-hidden hover:scale-105"
                        >
                            <img
                                className="w-1/3 object-cover"
                                src={product.img}
                                alt={product.title}
                            />
                            <div className="flex flex-col w-96">
                                <Title className="mr-5 mt-3 self-end">
                                    {product.title}
                                </Title>
                                <div className="flex flex-row justify-between mt-20 ml-4">
                                    <Text>Sales</Text>
                                    <BadgeDelta
                                        deltaType={product.salesRate[0]}
                                    >
                                        {product.salesRate[1]}
                                    </BadgeDelta>
                                </div>
                                <Metric className="ml-4">
                                    ${product.totalSales}
                                </Metric>
                            </div>
                        </Link>
                    </Card>
                ))}
            </div>
            <div className="flex flex-col items-center gap-2 mt-10">
                {PRODUCTS2.map((product) => (
                    <Card key={product.id} className="max-w-xl self-center">
                        <Link
                            href={"/products/" + product.id}
                            className="flex overflow-hidden hover:scale-105"
                        >
                            <img
                                className="w-1/3 object-cover"
                                src={product.img}
                                alt={product.title}
                            />
                            <div className="flex flex-col w-96">
                                <Title className="mr-5 mt-3 self-end">
                                    {product.title}
                                </Title>
                                <div className="flex flex-row justify-between mt-20 ml-4">
                                    <Text>Sales</Text>
                                    <BadgeDelta
                                        deltaType={product.salesRate[0]}
                                    >
                                        {product.salesRate[1]}
                                    </BadgeDelta>
                                </div>
                                <Metric className="ml-4">
                                    ${product.totalSales}
                                </Metric>
                            </div>
                        </Link>
                    </Card>
                ))}
            </div>
        </div>
    );
}
export default Page;
