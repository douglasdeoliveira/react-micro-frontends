interface Hosts {
  foo: string;
  bar: string;
}

export default {
  foo: process.env.REACT_APP_MF_FOO,
  bar: process.env.REACT_APP_MF_BAR,
} as Hosts;
