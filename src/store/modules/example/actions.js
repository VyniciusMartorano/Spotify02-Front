import * as types from '../types'

export function clicaBotaoRequest() {
    return {
        type: types.BOTAO_CLICADO_REQUEST,
        // payload: 'dados... com diciioonarioo'
    }
}

export function clicaBotaoSucess() {
    return {
        type: types.BOTAO_CLICADO_SUCESS,
        // payload: 'dados... com diciioonarioo'
    }
}

export function clicaBotaoFailure() {
    return {
        type: types.BOTAO_CLICADO_FAILURE,
        // payload: 'dados... com diciioonarioo'
    }
}