# 世界大学选择器

世界所有大学选择

## 运行

第一步，请先安装 node（建议版本 8.9.4）

第二步，安装依赖

```bash
$ yarn add wl-select
```

第三步，进行构建

```bash
$ yarn start
```

第四步，打开 http://localhost:3000/，预览效果

![](https://raw.githubusercontent.com/super-lin0/pic/master/20190617212444.png)

# Usage

```
import Select from "wl-select";

```

```
<Select onChange={handleSchoolChange} />
```

```
const handleSchoolChange = university => {
  console.log(university);
};
```
