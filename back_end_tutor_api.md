# entry_form_API

本接口用于报名表信息管理

- 查询已有报名表信息列表（*）
- 查询单个报名表信息
- 增加报名表信息
- 修改报名表信息信息
- 删除报名表信息（*）

## 查询已有报名表信息列表

#### HTTP Method

```http
[GET]
```

#### Path

```http
/enrty/userlist
```

###### 参数说明

| 参数  | 说明           | 默认 | 是否必须 |
| ----- | -------------- | ---- | -------- |
| limit | 每页显示的个数 | 25   | 否       |
|       |                |      |          |

###### 样例

```http
/entry_form/userlist&limit=25
```

### Response

###### JsonSchema:

```javascript
{
	type: 'object', 
	properties: {
		users: {
			type: 'array', 
			items: {
				type: 'object', 
				properties: {
					user_name: {type: 'string'},
                      phone: {type: 'string'},
				}
			}
		},
	},
};
```

#### 字段说明:

| 字段      | 数据类型 | 说明   |
| --------- | -------- | ------ |
| user_name | string   | 用户名 |
| phone     | string   | 手机号 |

###### 样例：

```json
{
  "users": [
    {
      "user_name": "test_user",
      "phone": "13018023370",
    },
    {
      "user_name": "test_user2",
      "phone": "123456",
    }
  ],
}
```

###### 错误码：

| 错误码 | 说明 |
| :----: | :--: |
|        |      |

## 查询某个报名表信息

#### HTTP Method

```http
[GET]
```

#### Path

```http
/entry_form/get_user?phone=<phone>
```

###### 参数说明

| 参数  | 说明                 | 是否必须 |
| ----- | -------------------- | -------- |
| phone | 要查询的报名表手机号 | 是       |

###### 样例

```http
/entry_form/get_user?phone=123456789
```

#### Response

###### JsonSchema:

```javascript
{
  "type": "object", 
  "properties": {
    "user_name": {"type": "string"},
    "phone": { "type": "string"  }
  }
}
```

###### 字段说明:

| 字段      | 数据类型 | 说明         |
| --------- | -------- | ------------ |
| user_name | string   | 报名者姓名   |
| phone     | string   | 手机号，唯一 |

###### 样例：

```json
{
	"user_name": "test_user",
	"phone": "12345678",
}
```

###### 错误码：

| 错误码 |        说明        |
| :----: | :----------------: |
|  900   |  报名表信息不存在  |
|        |                    |
|  909   | 报名表信息无手机号 |



## 新增报名表信息

#### HTTP Method

```http
[POST]
```

#### Path

```http
/entry_form/new_user
```

### PostBody

| 字段      | 数据类型 | 说明   | 样例        | 是否必需 |
| --------- | -------- | ------ | ----------- | -------- |
| user_name | string   | 姓名   | “test_user” | 是       |
| phone     | string   | 手机号 | "123456789" | 是       |

###### JsonSchema:

```javascript
{
  "type": "object", 
  "properties": {
    "user_name": {"type": "string"}, 
    "phone": {"type": "string"},   
  }
}
```

###### 示例

```json
{
	"user_name": "test_user",
  	"phone":  "1303912809312",
}
```

#### Response

###### JsonSchema:

```javascript
{
	type: 'object',
	properties: {
		user: {
			type: 'object',
			required: [	'phone'],
			properties: {
			    user_name: {type: 'string'},
                 phone: {type: 'string'},
			}
		}
	}
}
```

###### 字段说明:

| 字段  | 数据类型 | 说明                  |
| ----- | -------- | --------------------- |
| phone | string   | 报名表信息 电话，唯一 |

###### 样例：

```json
{
    user: {
        phone: "123456"
    }
}
```

###### 错误码：

| 错误码 |          说明          |
| :----: | :--------------------: |
|  xxx   | 新增的报名表信息已存在 |

## 修改报名表信息信息

#### HTTP Method

```http
[POST]
```

#### Path

```http
/entry_form/update_user
```

### PostBody

| 字段      | 数据类型 | 说明         | 样例        | 是否必需 |
| --------- | -------- | ------------ | ----------- | -------- |
| user_name | string   | 报名表信息名 | “test_user” | 否       |
| phone     | string   | 手机号       | "123456"    | 是       |

###### JsonSchema:

```javascript
{
  "type": "object", 
  "properties": {
    "user_name": {"type": "string"},
    "phone": {"type": "string"},
  }
}
```

###### 示例

```json
{
	"user_name": "test_user",
 	"phone":  "123456",
}
```

#### Response

###### JsonSchema:

```javascript
{
	type: 'object',
	properties: {
		user: {
			type: 'object',
			required: [	'user_name'],
			properties: {
			    phone: {type: 'string'}
			}
		}
	}
}
```

###### 字段说明:

| 字段  | 数据类型 | 说明           |
| ----- | -------- | -------------- |
| phone | string   | 电话号码，唯一 |

###### 样例：

```json
{
 	"phone":  "123456",
}
```

###### 错误码：

| 错误码 |       说明       |
| :----: | :--------------: |
|  900   | 报名表信息不存在 |

## 删除报名表信息

#### HTTP Method

```http
[DELETE]
```

#### Path

```http
/entry_form/delete_user?phone=<phone>
```

###### 参数说明

| 参数  | 说明               | 是否必须 |
| ----- | ------------------ | -------- |
| phone | 要删除的用户手机号 | 是       |

###### 样例

```http
/entry_form/deleteuser?phone=123456
```

#### Response

###### JsonSchema:

```javascript
{
	type: 'object',
	properties: {
		user: {
			type: 'object',
			required: [	'phone'],
			properties: {
			    phone: {type: 'string'}
			}
		}
	}
}
```

###### 字段说明:

| 字段  | 数据类型 | 说明             |
| ----- | -------- | ---------------- |
| phone | string   | 用户手机号，唯一 |

###### 样例：

```json
{
    user:{
 	"phone":  "123456",
	}
}
```

###### 错误码：

| 错误码 |       说明       |
| :----: | :--------------: |
|  900   | 报名表信息不存在 |

 