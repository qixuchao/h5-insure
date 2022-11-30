import { number } from '@intlify/core-base';

/*
 * @Description: 轮询工具
 * @Autor: kevin.liang
 * @Date: 2022-11-30 11:49:23
 * @LastEditors: kevin.liang
 * @LastEditTime: 2022-11-30 12:13:23
 */
interface ThreadConfig {
  start: () => void;
  stop: () => void;
  number: number;
  time: number;
}
const noop = () => {};
/**
 * 轮询类封装
 * @param config 配置对象
 * @constructor
 */
class Thread {
  params: ThreadConfig;

  time = 1000;

  total = 0;

  timer: any;

  constructor(config: ThreadConfig) {
    this.params = this.init(config);
  }

  init(config: ThreadConfig): ThreadConfig {
    const tempParams: ThreadConfig = {
      start: config.start || noop,
      stop: config.stop || noop,
      number: config.number ? Math.abs(config.number) : 0,
      time: config.time ? Math.abs(config.time) : 300,
    };
    this.time = config.time;

    return tempParams;
  }

  run() {
    this.timer = setTimeout(this.runTime.bind(this), this.time);
  }

  stop() {
    clearTimeout(this.timer);
    this.params.stop();
  }

  runTime() {
    try {
      this.params.start();
    } finally {
      if (this.params.number > 0) {
        if (this.total >= this.params.number) {
          this.params.stop();
          clearTimeout(this.timer);
          // eslint-disable-next-line no-unsafe-finally
          return;
        }
        if (!this.total) {
          this.total = 1;
        }
        this.total += 1;
      }
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(this.runTime.bind(this), this.time);
  }
}

export default (params: ThreadConfig) => new Thread(params);

export type ThreadType = Thread;
/**
 * 使用
 * @example
 *  // 示例1-手动结束轮询
    const thread = new Thread({
        start: function () {
            console.log("轮询中...")
        },
        stop: function () {
            console.log("轮询结束，结束方式：手动结束")
        },
        number: 0, //这里是轮询次数配置，不配置默认无线轮询
        time: 1000 //这里是轮询的时间 不配置默认 300ms
    })

    // 开始轮询
    thread.run();

    // 主动结束轮询
    // thread.stop()
    setTimeout(() => {
        thread.stop()
    }, 6000)

 *
 * ========
 *
 * // 示例2- 通过轮询次数结束轮询
    const thread = new Thread({
        start: function () {
            console.log("轮询中...")
        },
        stop: function () {
            console.log("轮询结束,结束方式：配置轮询次数")
        },
        number: 5, //这里是轮询次数配置，不配置默认无线轮询
        time: 1000 //这里是轮询的时间 不配置默认 300ms
    })

    // 开始轮询
    thread.run();
 */
