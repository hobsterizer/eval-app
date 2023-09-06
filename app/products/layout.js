import NavBar from "@/app/products/NavBar";

export default function DashboardLayout({ children }) {
    return (
        <section>
            <NavBar></NavBar>
            {children}
        </section>
    );
}
