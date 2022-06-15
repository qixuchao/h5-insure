import { SetupContext } from 'vue';
import { useRouter } from 'vue-router';
import ZaSvg from '@/components/ZaSvg/index.vue';
import './index.scss';

interface CardProps {
  title?: string;
  color?: string;
  subtitle?: string;
  showmore?: boolean;
  url?: string;
  linecolor?: string;
}

/**
 *
 * @param props
 * @param context
 * @returns
 */

export default function Card(props: CardProps, context: SetupContext) {
  const { slots } = context;
  const { title = '', color = '', subtitle = '', showmore = false, url = '', linecolor = '' } = props;
  const history = useRouter();

  const colorVariable = (a: any): string => {
    return `rgba(${color},${a})`;
  };
  const handleMore = (urlLink: string) => {
    history.push(`./${urlLink}`);
    console.log('history::', urlLink);
  };

  return (
    <div class="com-card-wrap">
      <div class="header" style={{ background: `linear-gradient(360deg, #FFFFFF 0%, ${colorVariable(0.15)} 100%)` }}>
        <div class="title">
          <p class="text">{title}</p>
          <div class="under-line" style={{ backgroundColor: linecolor || colorVariable(1) }}></div>
        </div>
        {showmore && (
          <div
            class="more"
            style={{ color: colorVariable(0.6) }}
            onClick={() => {
              handleMore(url);
            }}
          >
            {subtitle}
            <ZaSvg name="right_arrow2" class="more" color="colorVariable(0.7)" />
          </div>
        )}
      </div>
      {slots.default && slots.default()}
    </div>
  );
}
