import Cookies from 'universal-cookie';

const cookies = new Cookies();

interface TypeMap {
  [key: string]: {
    INT: string;
    DOUBLE: string;
    STRING: string;
    ENUM: string;
    BOOLEAN: string;
    DATETIME: string;
    ARRAY: string;
  };
}

export const TypeMap: TypeMap = {
  cn: {
    INT: '整数',
    DOUBLE: '小数',
    STRING: '字符串',
    ENUM: '枚举',
    BOOLEAN: '布尔',
    DATETIME: '时间',
    ARRAY: '数组',
  },
  en: {
    INT: 'Integer',
    DOUBLE: 'Double',
    STRING: 'String',
    ENUM: 'Enum',
    BOOLEAN: 'Boolean',
    DATETIME: 'Datetime',
    ARRAY: 'Array',
  },
};

interface TypeInfo {
  displayName: string;
  color: string;
}

interface TypeMapping {
  [key: string]: TypeInfo;
}

export const getLang = (): string => {
  return cookies.get('lang') || 'cn';
};

export const getTypeMap = (typeMap: any, language?: string): TypeMapping => {
  let lang = language || getLang();
  let otp = TypeMap[lang];

  const TYPE_MAP: TypeMapping = {
    INT: {
      displayName: otp.INT,
      color: '#5262C7',
    },
    LONG: {
      displayName: otp.INT,
      color: '#5262C7',
    },
    DOUBLE: {
      displayName: otp.DOUBLE,
      color: '#00D2C2',
    },
    STRING: {
      displayName: otp.STRING,
      color: '#826AF9',
    },
    ENUM: {
      displayName: otp.ENUM,
      color: '#00C5DC',
    },
    BOOLEAN: {
      displayName: otp.BOOLEAN,
      color: '#4A9AF7',
    },
    DATETIME: {
      displayName: otp.DATETIME,
      color: '#826AF9',
    },
    ARRAY: {
      displayName: otp.ARRAY,
      color: '#E5A74F',
    },
  };

  return TYPE_MAP || {};
};
