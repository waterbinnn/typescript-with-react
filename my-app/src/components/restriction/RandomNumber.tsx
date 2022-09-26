//never type 으로 제한하기

type RandomNumberType = {
    value: number;
};

type positiveNumber = RandomNumberType & {
    isPositive: boolean;
    isNegative?: never;
    isZero?: never;
};
type negativeNumber = RandomNumberType & {
    isNegative: boolean;
    isPositive?: never;
    isZero?: never;
};
type Zero = RandomNumberType & {
    isZero: boolean;
    isNegative?: never;
    isPositive?: never;
};

type RandomNumberProps = positiveNumber | negativeNumber | Zero;

export const RandomNumber = ({
    value,
    isPositive,
    isNegative,
    isZero,
}: RandomNumberProps) => {
    return (
        <div>
            {value} {isPositive && 'positive'} {isNegative && 'negative'}{' '}
            {isZero && 'zero'}
        </div>
    );
};

{
    /* <RandomNumber value={10} isPositive /> */
}
