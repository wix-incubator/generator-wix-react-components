import * as React from 'react';
import { expect, ClientRenderer, sinon, simulate } from 'test-drive-react';
import { <%= names['ComponentName'] %> } from './<%= names["component-name"] %>';

describe('<<%= names['ComponentName'] %> />', () => {
  const clientRenderer = new ClientRenderer();

  afterEach(() => clientRenderer.cleanup())

  it('outputs an HTML element', async () => {
    const { select, waitForDom } = clientRenderer.render(<<%= names['ComponentName'] %> data-automation-id="<%= names['COMPONENT-NAME'] %>" />);

    await waitForDom(() => {
      const element = select('<%= names["COMPONENT-NAME"] %>') as HTMLInputElement;

      expect(element).to.be.present();
    });
  });
});
