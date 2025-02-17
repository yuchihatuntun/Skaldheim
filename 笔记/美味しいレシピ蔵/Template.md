---
UID: {{DATE:YYYY年MM月DD日HH:mm:ss}}
aliases: ["{{VALUE:菜名}}"]
tags: ["菜谱", "{{VALUE:菜系}}", "{{VALUE:烹饪方式}}"]
Type: Recipe
Status: Active

# 基本信息
dish_name: {{VALUE:菜名}}
cuisine_type: {{VALUE:菜系}}
cooking_method: {{VALUE:烹饪方式}}
difficulty: <% tp.system.suggester(["⭐新手","⭐⭐初级","⭐⭐⭐进阶","⭐⭐⭐⭐高级","⭐⭐⭐⭐⭐大师"],["1","2","3","4","5"]) %>
prep_time: {{VALUE:准备时间}}
cook_time: {{VALUE:烹饪时间}}
servings: {{VALUE:份数}}
cost: {{VALUE:成本}}

# 食材管理
主料: {{VALUE:主料清单}}
辅料: {{VALUE:辅料清单}}
调味料: {{VALUE:调味料清单}}

# 营养信息
calories: {{VALUE:热量}}
protein: {{VALUE:蛋白质}}
fat: {{VALUE:脂肪}}
carbs: {{VALUE:碳水}}
---


> [!note]+ 烹饪步骤
> ## 准备工作
> 1. {{VALUE:准备步骤1}}
> 
> ## 烹饪过程
> 2. {{VALUE:烹饪步骤1}}
> - ⏱️时间：{{VALUE:时间1}}
> - 🔥火候：{{VALUE:火候1}}
> 
> ## 调味步骤
> 3. {{VALUE:调味步骤1}}

> [!tip]+ 关键技巧
> - 食材选择：{{VALUE:选材说明}}
> - 火候控制：{{VALUE:火候说明}}
> - 调味要点：{{VALUE:调味说明}}
> - 摆盘建议：{{VALUE:摆盘说明}}

> [!warning]+ 注意事项
> - 食材禁忌：{{VALUE:禁忌}}
> - 过敏警告：{{VALUE:过敏原}}
> - 储存方法：{{VALUE:储存建议}}
> - 品质保持：{{VALUE:保质期}}

> [!example]+ 成品评估
> | 评估项目 | 标准 | 实际 | 改进建议 |
> |----------|------|------|-----------|
> | 外观 | {{VALUE:标准}} | {{VALUE:实际}} | {{VALUE:建议}} |
> | 口感 | {{VALUE:标准}} | {{VALUE:实际}} | {{VALUE:建议}} |
> | 香气 | {{VALUE:标准}} | {{VALUE:实际}} | {{VALUE:建议}} |

> [!quote]+ 制作记录
> | 日期 | 评分 | 用时 | 成本 | 改进建议 |
> |------|------|------|------|-----------|
> |      |      |      |      |           |

# 🔗 相关信息
- 推荐搭配：{{VALUE:搭配建议}}
- 变体做法：{{VALUE:其他做法}}
- 参考来源：{{VALUE:来源}}