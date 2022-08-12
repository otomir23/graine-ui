import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Button, darkTheme, defaultTheme, Input, ThemeProvider, useFormField, Select, Skeleton, Spinner, InputWrapper, Toggle} from '../.';

const App = () => {
    const [loading, setLoading] = React.useState(false);
    const [theme, setTheme] = React.useState(false);
    const softDrink = useFormField({
        id: "soft-drink",
        label: "Your favorite soft drink",
        onChange(s: string): void {
            console.log(s);
        },
        placeholder: "Dr Pepper",
        type: undefined,
        validation: {
            required: true,
            minLength: 3,
            maxLength: 10,
            validate: (s: string) => {
                return {
                    status: s.trim().toLocaleLowerCase() !== "coffee",
                    message: "Coffee is not a soft drink, dummy!"
                }
            }
        }
    })
    const beer = useFormField({
        id: "beer",
        label: "Your favorite beer*",
        onChange(s: string): void {
            console.log(s);
        },
        placeholder: "Budweiser",
        validation: {
            required: true,
        }
    });
    const clickHandler = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            window?.open('https://youtu.be/dQw4w9WgXcQ', '_blank')?.focus();
        }, Math.random() * 1000 + 1000);
    }

    return (
        <ThemeProvider theme={theme ? darkTheme : defaultTheme}>
            <style>{`
                html, body {
                    margin: 0;
                    padding: 0;
                }

                html, body, #root {
                    height: 100%;
                }
            `}</style>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                height: '100vh',
                width: '100%',
                flexDirection: 'column',
                gap: '1rem',
                padding: '2rem'
            }}>
                <span style={{
                    cursor: 'pointer',
                    textDecoration: 'underline',
                }} onClick={() => {
                    setTheme(!theme);
                }}> toggle theme </span>
                <Button variant={"primary"} onClick={clickHandler} loading={loading}>
                    Download more RAM
                </Button>
                <Button variant={"secondary"} onClick={clickHandler} loading={loading}>
                    Download better CPU
                </Button>
                <Input {...softDrink} disabled={loading} />
                <Select {...beer} options={[
                    {label: "Budweiser", value: "Budweiser"},
                    {label: "Coors", value: "Coors"},
                    {label: "Corona", value: "Corona"},
                    {label: "PBR", value: "PBR"},
                ]} />
                {
                    loading ?
                        <Skeleton /> :
                        <span style={{
                            color: 'var(--color-subtext)',
                            fontSize: '0.8rem',
                        }}>*Note: I know nothing about beer, its all Copilot's suggestions.</span>
                }
                {loading && <Spinner />}
                <InputWrapper label={"Peter Griffin"} id={"pt-gf"}>
                    hey look, Lois, I'm in a wrapper!
                </InputWrapper>
                <Toggle id={'toggle'} label={"Toggle is currently wip and looks pretty bad. Also it doesnt support light theme. Yeah."} />
                <Skeleton><div style={{
                    width: '16rem',
                    height: '9rem',
                }} /></Skeleton>
            </div>
            <span style={{
                position: 'fixed',
                bottom: '1rem',
                right: '1rem',
                fontSize: '0.8rem',
            }}>Also, check out this cool scrollbar</span>
            {[...Array(32)].map((a, i) => <br key={i}/>)}
        </ThemeProvider>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
