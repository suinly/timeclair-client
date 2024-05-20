import { createApp, h, type Component } from 'vue';

interface ModalOptions {
  component: Component;
  props?: Record<string, any>;
}

export const useModal = () => {
  const open = ({ component, props }: ModalOptions) => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    const app = createApp({
      render() {
        return h(component, {
          ...props,
          onClose: () => close(),
        });
      },
    });

    const close = () => {
      app.unmount();
      document.body.removeChild(container);
    };

    app.mount(container);
  };

  return { open };
};
