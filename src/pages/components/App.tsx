import React, { Component } from 'react'
import Select, { Option } from './Select'
import Input from './Input'
import Output from './Output'
import { TLang, TGost } from './../../types'
import { translit } from './../../index'

interface AppState {
    rule: string,
    lang: string,
    input: string,
    output: string,
}

class App extends Component {
    rules: Array<Option> = [
        { value: '7.79-2000', title: 'ГОСТ 7.79-2000 (ISO 9-95)' },
    ]

    langs: Array<Option> = [
        { value: 'ru', title: 'Русский язык' },
        { value: 'be', title: 'Белорусский язык' },
        { value: 'uk', title: 'Украинский язык' },
        { value: 'bg', title: 'Болгарский язык' },
        { value: 'mk', title: 'Македонский язык' },
    ]
    
    state: AppState = {
        rule: this.rules[0].value,
        lang: this.langs[0].value,
        input: '',
        output: '',
    }

    handlerChangeRule = (inputRule: string) => {
        const input: string = this.state.input
        const lang: TLang = this.state.lang as TLang
        const rule: TGost = inputRule as TGost

        this.setState({
            rule,
            output: translit(input, lang, rule),
        })
    }

    handlerChangeLang = (inputLang: string) => {
        const input: string = this.state.input
        const lang: TLang = inputLang as TLang
        const rule: TGost = this.state.rule as TGost

        this.setState({
            lang,
            output: translit(input, lang, rule),
        })
        
    }

    handlerChangeInput = (input: string) => {
        const lang: TLang = this.state.lang as TLang
        const rule: TGost = this.state.rule as TGost

        this.setState({
            input,
            output: translit(input, lang, rule ),
        })
    }

    render() {
        return (
            <div id="translit">
                <div className="row">
                    <div className="col-sm-6">
                        <Select label="Выберите правила транслитерации" items={ this.rules } onChange={ this.handlerChangeRule } />
                    </div>
                    <div className="col-sm-6">
                        <Select label="Выберите язык" items={ this.langs } onChange={ this.handlerChangeLang } />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <Input label="Вводите текст" value={ this.state.input } onChange={ this.handlerChangeInput } />
                    </div>
                    <div className="col-sm-6">
                        <Output label="Результат транслитерации" value={ this.state.output } />
                    </div>
                </div>
            </div>
        )
    }
}

export default App
