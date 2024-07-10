import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return (
        <Link href='/'>
            <div className="rounded-md overflow-hidden">
                <Image src='/logo.png' width={54} height={54} priority alt='' />
            </div>
        </Link>
    )
}

export default Logo;
