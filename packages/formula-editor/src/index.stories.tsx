import FormulaEdit from './FormulaEdit';

export default {
  title: 'FormulaEdit',
  component: FormulaEdit,
};

export const Default = () => {
  return (
    <FormulaEdit
      value=""
      fieldList={[
        { name: '字段1', value: 'field1' },
        { name: '字段2', value: 'field2' },
      ]}
      methodList={[
        { name: '方法1', realValue: 'method1' },
        { name: '方法2', realValue: 'method2' },
      ]}
      onChange={(enCode, data) => {
        console.log('onChange', enCode, data);
      }}
    />
  );
};
