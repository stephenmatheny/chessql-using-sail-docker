import ProfileLink from "./ProfileLink";

export default {
    title: 'ProfileLink',
    component: ProfileLink,
}

export const Default = {
    args: {
        imageUrl: "https://picsum.photos/200?random=2",
        fullName: "Test Users",
        variant: "primary"
    },
    argTypes: {
        variant: {
            options: ['primary', 'secondary'],
            control: { type: 'radio' },
        },
    },
}