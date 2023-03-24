import { Outlet } from "react-router";
import { LastLocationProvider } from "react-router-dom-last-location";

export default function MainLayout() {
    return (
        <>
        <LastLocationProvider>
            <Outlet />
        </LastLocationProvider>
        </>
    );
}