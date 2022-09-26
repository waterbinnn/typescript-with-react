type HorizontalPositon = 'left' | 'center' | 'right';
type VerticalPositon = 'top' | 'center' | 'bottom';

type ToastProps = {
    // position: `${HorizontalPositon}-${VerticalPositon}`;
    // 여기서 center-center 같은 것도 주고싶은데 이 조합은 안만들어줌 이걸 해결하려면 아래 처럼 작성 - center 로

    position:
        | Exclude<`${HorizontalPositon}-${VerticalPositon}`, 'center-center'>
        | 'center';
};

export const Toast = ({ position }: ToastProps) => {
    return <div>Toast Notification Position - {position}</div>;
};

{
    /* <Toast position="center" /> */
}
