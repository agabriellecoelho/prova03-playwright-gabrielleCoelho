import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import PlaszomElements from '../elements/PlaszomElements';
import BasePage from './BasePage';

export default class FarmaciaPage extends BasePage {
  readonly plaszomElements: PlaszomElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.plaszomElements = new PlaszomElements(page);
  }

  async preencherCamposValidos(): Promise<void> {
    await this.page.mouse.wheel(0, 5);
    await this.plaszomElements.getCampoEmpresa().fill(faker.company.name());
    await this.plaszomElements.getCnpj().fill(faker.string.numeric(14));
    await this.plaszomElements.getCampoNome().fill(faker.person.fullName());
    await this.plaszomElements.getCampoCidade().fill('Criciúma');
    await this.plaszomElements.getCampoEstado().fill('Santa Catarina');
    await this.plaszomElements.getCampoCep().fill('88801000');
    await this.plaszomElements.getCampoTelefone().fill(faker.phone.number(10)); //preciso utilizar 10, caso contrário não funciona
    await this.plaszomElements.getCampoEmail().fill(faker.internet.email());
    await this.plaszomElements.getDropdownDestino().click();
    await this.plaszomElements.getOpcaoDestino('vilnei@plaszom.com.br');
    await this.plaszomElements.getCampoMensagem().fill(faker.lorem.words(20));
    await this.plaszomElements
      .getCampoMensagem()
      .fill(faker.lorem.words(20));
  }

  async enviarFormulario(): Promise<void> {
    await this.plaszomElements.getCheckAceito().click();
    await this.plaszomElements.getTextoModal().click();
    await this.plaszomElements.getBotaoEnviar().click();
    await this.plaszomElements.getRetornoEnviar().click();
  }

  async validarMensagem(): Promise<void> {
    await expect(this.plaszomElements.getValidarMensagem()).toBeVisible();
  }

  async verificaExisteEndereco(): Promise<void> {
    await this.plaszomElements.getExisteRua();
    await this.plaszomElements.getExisteBairro();
    await this.plaszomElements.getExisteCep();
  }

}