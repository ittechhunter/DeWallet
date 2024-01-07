import { Section } from "../Util";

import { IToken } from "../../interfaces/List.interfaces";
import { Flex, Heading, Label } from "./Utils";

export default function Token(props: { token: IToken }) {
    return <Section styles="flex !py-2 mt-2">
        <img src={props.token.icon} alt="usdt" className="mr-4" />
        <div className="flex-1 my-auto">
            <Flex>
                <Heading text={`${props.token.quantity.value.toLocaleString("en-US")} ${props.token.quantity.unit}`} />
                <Heading text={`${props.token.price.unit}${props.token.price.value.toLocaleString("en-US")}`} />
            </Flex>
            <Label text={props.token.name} />
        </div>
    </Section>
}