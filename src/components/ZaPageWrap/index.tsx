import { useEventListener, useWindowSize } from '@vueuse/core';
import { Icon } from 'vant';
import { defineComponent, nextTick, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import './index.scss';

const DefaultHeader = () => {
  const route = useRoute();
  return (
    <header class="default-page-header">
      <div class="header-left" onClick={() => window.history.back()}>
        <Icon name="arrow-left" />
      </div>
      <div class="header-title">{route.meta.title}</div>
    </header>
  );
};

interface ZaPageWrapOptions {
  hideHeaderPlaceholder?: boolean;
  hideFooterPlaceholder?: boolean;
  ['main-class']?: string;
  ['footer-class']?: string;
}

export default defineComponent<ZaPageWrapOptions>({
  name: 'ZaPageWrap',
  setup(props, { slots, attrs }) {
    // const { hideFooterPlaceholder } = attrs;
    const mainClass = attrs['main-class'];
    // const hideHeaderPlaceholder = attrs['hide-footer-placeholder'];
    const hideHeaderPlaceholder = attrs['hide-header-placeholder'];
    const hideFooterPlaceholder = attrs['hide-footer-placeholder'];

    const footerClass = attrs['footer-class'];
    const header = ref(); // 顶部header导航栏，可选
    const main = ref(); // 中间内容区域，默认slot
    const footer = ref(); // 底部footer 可选
    const headerh = ref(0); // header头部的高度
    const footerh = ref(0); // 底部固定footer的高度
    const { height } = useWindowSize(); // 获取屏幕高度
    const ev = window.onorientationchange ? 'orientationchange' : 'resize';
    const needShowHeader = ref(false);
    const setHeaderHeight = () => {
      nextTick(() => {
        headerh.value = header.value?.offsetHeight || 0;
      });
    };

    const setFooterHeight = () => {
      nextTick(() => {
        footerh.value = footer.value?.offsetHeight || 0;
      });
    };

    const initPageLayout = () => {
      if (slots.footer) {
        setFooterHeight();
      }
      if (slots.header) {
        setHeaderHeight();
      }
    };

    onMounted(() => {
      needShowHeader.value = window.location.host.indexOf('localhost') > -1 && window.location.pathname !== '/';
      initPageLayout();
    });

    useEventListener(window, ev, () => {
      initPageLayout();
    });

    return () => (
      <div class="page-container" style={{ minHeight: `${height.value}px` }}>
        {slots.header ? (
          <header ref={header} class="page-header">
            {slots.header?.()}
          </header>
        ) : null}
        {needShowHeader.value ? <DefaultHeader /> : null}

        {slots.header && !hideHeaderPlaceholder ? <div style={{ height: `${headerh.value}px` }}></div> : null}

        <main ref={main} class={`page-main ${mainClass}`}>
          {slots.default?.()}
        </main>
        {/* footer占位置，免得main区域被footer遮挡 */}
        {slots.footer && !hideFooterPlaceholder ? <div style={{ height: `${footerh.value}px` }}></div> : null}
        {/* 固定底部，如果要修改，从footer-class去修改 */}
        {slots.footer ? (
          <footer ref={footer} class={`van-safe-area-bottom page-footer ${footerClass}`}>
            {slots.footer?.()}
          </footer>
        ) : null}
      </div>
    );
  },
});
