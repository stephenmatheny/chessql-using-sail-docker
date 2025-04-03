import Test from './Test';

export default {
    title: 'Test',
    component: Test,
}

export const Default = () => <Test />
export const Large = {
    args: {
        size: "Large",
        value: "text of large"
    }
}