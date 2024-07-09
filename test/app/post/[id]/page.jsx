"use client";
import { usePathname } from "next/navigation";
export default function Post() {
const pathname = usePathname();
return <p> {pathname}</p>;/*the pathname returns the path of the page for example you 
will see "/post/3" and depending on what page you acess the "3" is gonna change
like "/post/1" "/post/2" etc thats my understanding
*/}