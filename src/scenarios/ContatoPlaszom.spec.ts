import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import PlaszomPage from '../support/pages/PlaszomPage';
import { ai } from '@zerostep/playwright';


test.describe('Testes funcionais no site da Plaszom Plásticos', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let plaszomPage: PlaszomPage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.plaszom')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    plaszomPage = new PlaszomPage(page);
    await page.goto(BASE_URL);
  });
  

  test('Verifica se muda lingua. Feito com Zerostep.', async ({ page }) => {
    await page.goto('https://www.plaszom.com.br/pt-br/contato');
  
    const aiArgs = { page, test };
    await ai('find spanish flag with class=icon-espanhol show text-hide and click, then find word Contact', aiArgs);
  });
  
  test('Verifica se existe localização.', async () => {
    await plaszomPage.verificaExisteEndereco();
  });

  test('Validar funcionalidade de contato para dúvidas, FINALIZA NO CAPTCHA.', async () => {
    await plaszomPage.preencherCamposValidos();
    await plaszomPage.enviarFormulario();
  });
});
