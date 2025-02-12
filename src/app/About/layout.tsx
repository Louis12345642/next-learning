import { ReactNode } from "react"

export default function AboutLayout({children}:
    Readonly<{
        children:ReactNode

    }>
    
){

    return (
        <div>
            <h1>this is in about layout</h1>

            {children}
        </div>
    )

}