class NegociacaoController{
    constructor(){
        let $ = document.querySelector.bind(document);
        this._data = $('#data');
        this._quantidade = $('#quantidade');
        this._valor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView._update(this._listaNegociacoes);
    }

    adiciona(event){
        event.preventDefault();
        this._listaNegociacoes.adicionaNegociacao(this._criaNegociacao(DateHelper.textoParaData(this._data.value), 
                                                  this._quantidade.value, this._valor.value));
        this._negociacoesView._update(this._listaNegociacoes);
        this._limpaFormulario();
    }

    _criaNegociacao(data, quantidade, valor){
        return new Negociacao(data, quantidade, valor);
    }

    _limpaFormulario(){
        this._data.focus();
        this._data.value = '';
        this._quantidade.value = '1';
        this._valor.value = '0';
    }
}