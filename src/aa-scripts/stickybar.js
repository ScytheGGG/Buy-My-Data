// functions/stickybar.js
export default function stickybar(navbarElement) {
        if (!navbarElement) return;
    
        const sticky = navbarElement.offsetTop;
    
        const handleScroll = () => {
            if (window.pageYOffset >= sticky) {
                navbarElement.classList.add("sticky");
            } else {
                navbarElement.classList.remove("sticky");
            }
        };
    
        window.addEventListener("scroll", handleScroll);
}
    