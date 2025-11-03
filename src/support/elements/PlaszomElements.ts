import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class PlaszomElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }
  
  getCampoEmpresa(): Locator {
    return this.page.locator('#ContatoEmpresa').first();
  }
  
  getCnpj(): Locator {
    return this.page.locator('#ContatoCnpj');
  }

  getCampoNome(): Locator {
    return this.page.locator('#ContatoNome');
  }

  getCampoCidade(): Locator {
    return this.page.locator('#ContatoCidade');
  }

  getCampoEstado(): Locator {
    return this.page.locator('#ContatoEstado');
  }

  getCampoCep(): Locator {
    return this.page.locator('#ContatoCep');
  }

  getCampoTelefone(): Locator {
    return this.page.locator('#ContatoTelefone');
  }

  getCampoEmail(): Locator {
    return this.page.locator('#ContatoEmail');
  }

 getDropdownDestino(): Locator {
    return this.page.locator('#ContatoDestino');
}

  getOpcaoDestino(email: string) {
    return this.getDropdownDestino().selectOption({ value: email });
}
  
  getCampoMensagem(): Locator {
    return this.page.locator('#ContatoMensagem');
  }

  getCheckAceito(): Locator {
    return this.page.locator(
      'input[name="MyCheckbox"]'
    );
  }

  getBotaoEnviar(): Locator {
    return this.page.locator('#form-contato').locator('#aplica');
  }

  getRetornoEnviar(): Locator {
    return this.page.locator('text=Confirme que você não é um Robô');
  }
  
  getInputAceito(): Locator {
    return this.page.locator('input[name="MyCheckbox"]');
  }

  getTextoModal(): Locator {
    return this.page.locator('input[name="MyCheckbox"]');
  }

  getValidarMensagem(): Locator {
    return this.page.locator(
      'text=Sua mensagem foi enviada com sucesso! Muito obrigado pelo seu contato!.'
    );
  }

  getCaptchaFrame(): Locator {
    return this.page.locator('#recaptcha-anchor');
  }

  getCaptchaCheckbox(): Locator {
    return this.getCaptchaFrame().locator('#recaptcha-anchor');
  }

  getExisteRua(): Locator {
    return this.page.locator(
      'text=Rodovia'
    );
  }

  getExisteBairro(): Locator {
    return this.page.locator(
      'text=Bairro'
    );
  }

  getExisteCep(): Locator {
    return this.page.locator(
      'text=Cep'
    );
  }
}