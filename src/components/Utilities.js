import tw, {styled} from "twin.macro";

export const Header = styled.span(({ noMargin }) => [
    tw`font-sans text-4xl md:text-5xl font-light hi-dpi:font-thin text-stone-400 uppercase mb-3`,
    noMargin && tw`mb-0`
]);

export const Text = tw.div`
    font-sans text-lg text-stone-100 pt-2
`;

export const GradientText = tw.span`
    bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent inline-block
`;

export const LinkButton = tw.a`
    no-underline
    border-rose-500 text-rose-500 
    border-width[1px]
    bg-stone-900
    hover:text-stone-50 hover:border-transparent
    hover:bg-gradient-to-tr
    from-rose-500 to-amber-500
    transition-all border-solid rounded-md
    text-lg
    cursor-pointer
    py-1.5 px-2
    my-2
`;

export const StyledLink = tw.a`
    // Gradient text
    bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent inline-block
    no-underline transition-all hover:opacity-60
`;
