export default function Footer() {
    return (
        <footer className="container flex items-center justify-center px-5 py-9 xl:py-10 space-x-2">
            <p className="text-white/70">&copy; {new Date().getFullYear()}</p>
            <span className="text-white">FlaTheme</span>
        </footer>
    );
}
