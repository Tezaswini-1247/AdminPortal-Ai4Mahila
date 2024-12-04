'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const Analytics = "分析";
const Documentation = "文档";
const Email = "电子邮件";
const Password = "密码";
const Provider = "提供商";
const ResetPasswordToken = "重置密码令牌";
const Role = "角色";
const Username = "用户名";
const Users = "用户";
const anErrorOccurred = "出错了!发生了一些问题,请重试。";
const clearLabel = "清除";
const dark = "深色";
const light = "浅色";
const or = "或";
const selectButtonTitle = "选择";
const skipToContent = "跳至内容";
const submit = "提交";
const zhHans = {
	Analytics: Analytics,
	"Auth.components.Oops.text": "您的账户已被暂停。",
	"Auth.components.Oops.text.admin": "如果这是一个错误,请联系您的管理员。",
	"Auth.components.Oops.title": "糟糕...",
	"Auth.form.active.label": "激活",
	"Auth.form.button.forgot-password": "发送电子邮件",
	"Auth.form.button.go-home": "返回主页",
	"Auth.form.button.login": "登录",
	"Auth.form.button.login.providers.error": "我们无法通过所选提供商连接您。",
	"Auth.form.button.login.strapi": "通过Strapi登录",
	"Auth.form.button.password-recovery": "密码恢复",
	"Auth.form.button.register": "让我们开始吧",
	"Auth.form.confirmPassword.label": "确认密码",
	"Auth.form.currentPassword.label": "当前密码",
	"Auth.form.email.label": "电子邮件",
	"Auth.form.email.placeholder": "例如: kai@doe.com",
	"Auth.form.error.blocked": "您的账户已被管理员阻止。",
	"Auth.form.error.code.provide": "提供的验证码不正确。",
	"Auth.form.error.confirmed": "您的账户邮箱未确认。",
	"Auth.form.error.email.invalid": "此电子邮件无效。",
	"Auth.form.error.email.provide": "请提供您的用户名或电子邮件。",
	"Auth.form.error.email.taken": "电子邮件已被占用。",
	"Auth.form.error.invalid": "标识符或密码无效。",
	"Auth.form.error.params.provide": "提供的参数不正确。",
	"Auth.form.error.password.format": "您的密码不能包含超过3个 $ 符号。",
	"Auth.form.error.password.local": "此用户从未设置本地密码,请通过账户创建时使用的提供商登录。",
	"Auth.form.error.password.matching": "密码不匹配。",
	"Auth.form.error.password.provide": "请提供您的密码。",
	"Auth.form.error.ratelimit": "尝试次数过多,请在1分钟后重试。",
	"Auth.form.error.user.not-exist": "此电子邮件不存在。",
	"Auth.form.error.username.taken": "用户名已被占用。",
	"Auth.form.firstname.label": "名字",
	"Auth.form.firstname.placeholder": "例如:明",
	"Auth.form.forgot-password.email.label": "输入您的电子邮件",
	"Auth.form.forgot-password.email.label.success": "重置密码链接已成功发送至",
	"Auth.form.lastname.label": "姓氏",
	"Auth.form.lastname.placeholder": "例如:李",
	"Auth.form.password.hide-password": "隐藏密码",
	"Auth.form.password.hint": "必须至少8个字符,包含1个大写字母,1个小写字母和1个数字",
	"Auth.form.password.show-password": "显示密码",
	"Auth.form.register.news.label": "关于新功能和即将到来的改进保持更新(这样做即表示您接受{terms}和{policy})。",
	"Auth.form.register.subtitle": "凭证仅用于在Strapi中进行身份验证。所有保存的数据都将存储在您的数据库中。",
	"Auth.form.rememberMe.label": "记住我",
	"Auth.form.username.label": "用户名",
	"Auth.form.username.placeholder": "例如: 李明",
	"Auth.form.welcome.subtitle": "登录您的Strapi账户",
	"Auth.form.welcome.title": "欢迎使用Strapi!",
	"Auth.link.forgot-password": "忘记密码?",
	"Auth.link.ready": "准备好登录了吗?",
	"Auth.link.signin": "登录",
	"Auth.link.signin.account": "已经有账户了?",
	"Auth.login.sso.divider": "或使用登录",
	"Auth.login.sso.loading": "加载中提供商...",
	"Auth.login.sso.subtitle": "通过SSO登录您的帐户",
	"Auth.privacy-policy-agreement.policy": "隐私政策",
	"Auth.privacy-policy-agreement.terms": "条款",
	"Auth.reset-password.title": "重置密码",
	"Content Manager": "内容管理器",
	"Content Type Builder": "内容类型构建器",
	Documentation: Documentation,
	Email: Email,
	"Files Upload": "文件上传",
	"HomePage.head.title": "主页",
	"HomePage.roadmap": "查看路线图",
	"HomePage.welcome.congrats": "恭喜!",
	"HomePage.welcome.congrats.content": "您已登录为第一个管理员。为了发现Strapi提供的强大功能,",
	"HomePage.welcome.congrats.content.bold": "我们建议您创建您的第一个集合类型。",
	"Media Library": "媒体库",
	"New entry": "新条目",
	Password: Password,
	Provider: Provider,
	ResetPasswordToken: ResetPasswordToken,
	Role: Role,
	"Roles & Permissions": "角色和权限",
	"Roles.ListPage.notification.delete-all-not-allowed": "由于某些角色与用户关联,因此无法删除它们",
	"Roles.ListPage.notification.delete-not-allowed": "如果与用户关联则角色不能被删除",
	"Roles.RoleRow.select-all": "选择{name} 进行批量操作",
	"Roles.RoleRow.user-count": "{number, plural, =0 {无用户} one {1 个用户} other {# 个用户}}",
	"Roles.components.List.empty.withSearch": "没有与搜索({search})对应的角色...",
	"Settings.PageTitle": "设置 —— {name}",
	"Settings.apiTokens.ListView.headers.createdAt": "创建时间",
	"Settings.apiTokens.ListView.headers.description": "描述",
	"Settings.apiTokens.ListView.headers.lastUsedAt": "上次使用",
	"Settings.apiTokens.ListView.headers.name": "名称",
	"Settings.apiTokens.ListView.headers.type": "令牌类型",
	"Settings.apiTokens.addFirstToken": "添加您的第一个API令牌",
	"Settings.apiTokens.addNewToken": "添加新的API令牌",
	"Settings.apiTokens.create": "创建新的API令牌",
	"Settings.apiTokens.createPage.BoundRoute.title": "绑定路由到",
	"Settings.apiTokens.createPage.permissions.description": "仅列出下面绑定了路由的操作。",
	"Settings.apiTokens.createPage.permissions.header.hint": "选择应用程序的操作或插件的操作,然后单击齿轮图标以显示绑定的路由",
	"Settings.apiTokens.createPage.permissions.header.title": "高级设置",
	"Settings.apiTokens.createPage.permissions.title": "权限",
	"Settings.apiTokens.createPage.title": "创建API令牌",
	"Settings.apiTokens.description": "生成的令牌列表以使用API",
	"Settings.apiTokens.emptyStateLayout": "您还没有任何内容...",
	"Settings.apiTokens.regenerate": "重新生成",
	"Settings.apiTokens.title": "API令牌",
	"Settings.apiTokens.lastHour": "最近1小时",
	"Settings.application.customization": "定制",
	"Settings.application.customization.auth-logo.carousel-hint": "替换认证页面中的logo",
	"Settings.application.customization.carousel-hint": "更改管理面板logo(最大尺寸:{dimension}x{dimension},最大文件大小:{size}KB)",
	"Settings.application.customization.carousel-slide.label": "Logo幻灯片",
	"Settings.application.customization.carousel.auth-logo.title": "认证logo",
	"Settings.application.customization.carousel.change-action": "更改logo",
	"Settings.application.customization.carousel.menu-logo.title": "菜单logo",
	"Settings.application.customization.carousel.reset-action": "重置logo",
	"Settings.application.customization.carousel.title": "Logo",
	"Settings.application.customization.menu-logo.carousel-hint": "替换主导航中的logo",
	"Settings.application.customization.modal.cancel": "取消",
	"Settings.application.customization.modal.pending": "待处理的logo",
	"Settings.application.customization.modal.pending.card-badge": "图像",
	"Settings.application.customization.modal.pending.choose-another": "选择其他logo",
	"Settings.application.customization.modal.pending.subtitle": "在上传之前管理所选的logo",
	"Settings.application.customization.modal.pending.title": "准备上传的logo",
	"Settings.application.customization.modal.pending.upload": "上传logo",
	"Settings.application.customization.modal.tab.label": "您希望如何上传资产?",
	"Settings.application.customization.modal.upload": "上传logo",
	"Settings.application.customization.modal.upload.cta.browse": "浏览文件",
	"Settings.application.customization.modal.upload.drag-drop": "拖放到此区域或",
	"Settings.application.customization.modal.upload.error-format": "上传了错误的格式(仅接受:jpeg、jpg、png、svg)。",
	"Settings.application.customization.modal.upload.error-network": "网络错误",
	"Settings.application.customization.modal.upload.error-size": "上传的文件太大(最大尺寸:{dimension}x{dimension},最大文件大小:{size}KB)",
	"Settings.application.customization.modal.upload.file-validation": "最大尺寸:{dimension}x{dimension},最大大小:{size}KB",
	"Settings.application.customization.modal.upload.from-computer": "从计算机",
	"Settings.application.customization.modal.upload.from-url": "从URL",
	"Settings.application.customization.modal.upload.from-url.input-label": "URL",
	"Settings.application.customization.modal.upload.next": "下一步",
	"Settings.application.customization.size-details": "最大尺寸:{dimension}×{dimension},最大文件大小:{size}KB",
	"Settings.application.description": "管理面板的全局信息",
	"Settings.application.edition-title": "当前计划",
	"Settings.application.ee-or-ce": "{communityEdition, select, true {社区版} other {企业版}}",
	"Settings.application.ee.admin-seats.add-seats": "{isHostedOnStrapiCloud, select, true {添加座位} other {联系销售}}",
	"Settings.application.ee.admin-seats.at-limit-tooltip": "已达上限:添加座位以邀请更多用户",
	"Settings.application.ee.admin-seats.count": "<text>{enforcementUserCount}</text>/{permittedSeats}",
	"Settings.application.get-help": "获取帮助",
	"Settings.application.link-pricing": "查看所有定价计划",
	"Settings.application.link-upgrade": "升级您的管理面板",
	"Settings.application.node-version": "节点版本",
	"Settings.application.strapi-version": "Strapi版本",
	"Settings.application.strapiVersion": "Strapi版本",
	"Settings.application.title": "概览",
	"Settings.error": "错误",
	"Settings.global": "全局设置",
	"Settings.permissions": "管理面板",
	"Settings.permissions.auditLogs.action": "操作",
	"Settings.permissions.auditLogs.admin.auth.success": "管理员登录",
	"Settings.permissions.auditLogs.admin.logout": "管理员登出",
	"Settings.permissions.auditLogs.component.create": "创建组件",
	"Settings.permissions.auditLogs.component.delete": "删除组件",
	"Settings.permissions.auditLogs.component.update": "更新组件",
	"Settings.permissions.auditLogs.content-type.create": "创建内容类型",
	"Settings.permissions.auditLogs.content-type.delete": "删除内容类型",
	"Settings.permissions.auditLogs.content-type.update": "更新内容类型",
	"Settings.permissions.auditLogs.date": "日期",
	"Settings.permissions.auditLogs.details": "日志详情",
	"Settings.permissions.auditLogs.entry.create": "创建条目{model, select, undefined {} other { ({model})}}",
	"Settings.permissions.auditLogs.entry.delete": "删除条目{model, select, undefined {} other { ({model})}}",
	"Settings.permissions.auditLogs.entry.publish": "发布条目 {model, select, undefined {} other {({model})}}",
	"Settings.permissions.auditLogs.entry.unpublish": "取消发布条目{model, select, undefined {} other { ({model})}}",
	"Settings.permissions.auditLogs.entry.update": "更新条目{model, select, undefined {} other { ({model})}}",
	"Settings.permissions.auditLogs.filters.combobox.aria-label": "搜索并选择一个选项以筛选",
	"Settings.permissions.auditLogs.listview.header.subtitle": "环境中发生的所有活动的日志",
	"Settings.permissions.auditLogs.media.create": "创建媒体",
	"Settings.permissions.auditLogs.media.delete": "删除媒体",
	"Settings.permissions.auditLogs.media.update": "更新媒体",
	"Settings.permissions.auditLogs.payload": "负载",
	"Settings.permissions.auditLogs.permission.create": "创建权限",
	"Settings.permissions.auditLogs.permission.delete": "删除权限",
	"Settings.permissions.auditLogs.permission.update": "更新权限",
	"Settings.permissions.auditLogs.role.create": "创建角色",
	"Settings.permissions.auditLogs.role.delete": "删除角色",
	"Settings.permissions.auditLogs.role.update": "更新角色",
	"Settings.permissions.auditLogs.user": "用户",
	"Settings.permissions.auditLogs.user.create": "创建用户",
	"Settings.permissions.auditLogs.user.delete": "删除用户",
	"Settings.permissions.auditLogs.user.fullname": "{firstname} {lastname}",
	"Settings.permissions.auditLogs.user.update": "更新用户",
	"Settings.permissions.auditLogs.userId": "用户ID",
	"Settings.permissions.category": "{category}的权限设置",
	"Settings.permissions.category.plugins": "{category}插件的权限设置",
	"Settings.permissions.conditions.anytime": "任何时间",
	"Settings.permissions.conditions.apply": "应用",
	"Settings.permissions.conditions.can": "可以",
	"Settings.permissions.conditions.conditions": "条件",
	"Settings.permissions.conditions.define-conditions": "定义条件",
	"Settings.permissions.conditions.links": "链接",
	"Settings.permissions.conditions.no-actions": "您首先需要选择操作(创建、读取、更新等)才能对其定义条件。",
	"Settings.permissions.conditions.none-selected": "任何时间",
	"Settings.permissions.conditions.or": "或",
	"Settings.permissions.conditions.when": "何时",
	"Settings.permissions.select-all-by-permission": "选择所有{label}权限",
	"Settings.permissions.select-by-permission": "选择{label}权限",
	"Settings.permissions.users.active": "激活",
	"Settings.permissions.users.create": "邀请新用户",
	"Settings.permissions.users.email": "电子邮箱",
	"Settings.permissions.users.firstname": "名字",
	"Settings.permissions.users.form.sso": "通过SSO连接",
	"Settings.permissions.users.sso.provider.error": "请求SSO设置时发生错误",
	"Settings.permissions.users.form.sso.description": "启用(开)时,用户可以通过SSO登录",
	"Settings.permissions.users.inactive": "未激活",
	"Settings.permissions.users.lastname": "姓氏",
	"Settings.permissions.users.listview.header.subtitle": "所有能够访问Strapi管理面板的用户",
	"Settings.permissions.users.roles": "角色",
	"Settings.permissions.users.strapi-author": "作者",
	"Settings.permissions.users.strapi-editor": "编辑者",
	"Settings.permissions.users.strapi-super-admin": "超级管理员",
	"Settings.permissions.users.tabs.label": "选项卡权限",
	"Settings.permissions.users.user-status": "用户状态",
	"Settings.permissions.users.username": "用户名",
	"Settings.profile.form.notify.data.loaded": "您的个人资料数据已加载",
	"Settings.profile.form.section.experience.clear.select": "清除所选的界面语言",
	"Settings.profile.form.section.experience.here": "这里",
	"Settings.profile.form.section.experience.interfaceLanguage": "界面语言",
	"Settings.profile.form.section.experience.interfaceLanguage.hint": "这只会在所选语言中显示您自己的界面。",
	"Settings.profile.form.section.experience.interfaceLanguageHelp": "偏好设置更改仅适用于您。更多信息请访问{here}。",
	"Settings.profile.form.section.experience.mode.hint": "以所选模式显示界面。",
	"Settings.profile.form.section.experience.mode.label": "界面模式",
	"Settings.profile.form.section.experience.mode.option-label": "{name}模式",
	"Settings.profile.form.section.experience.title": "体验",
	"Settings.profile.form.section.head.title": "用户简介",
	"Settings.profile.form.section.profile.page.title": "简介页面",
	"Settings.roles.create.description": "定义角色的权限",
	"Settings.roles.create.title": "创建角色",
	"Settings.roles.created": "角色已创建",
	"Settings.roles.edit.title": "编辑角色",
	"Settings.roles.form.button.users-with-role": "{number, plural, =0 {无用户} one {1个用户} other {#个用户}}拥有此角色",
	"Settings.roles.form.created": "已创建",
	"Settings.roles.form.description": "角色的名称和描述",
	"Settings.roles.form.permission.property-label": "{label}权限",
	"Settings.roles.form.permissions.attributesPermissions": "字段权限",
	"Settings.roles.form.permissions.create": "创建",
	"Settings.roles.form.permissions.delete": "删除",
	"Settings.roles.form.permissions.publish": "发布",
	"Settings.roles.form.permissions.read": "读取",
	"Settings.roles.form.permissions.update": "更新",
	"Settings.roles.list.button.add": "添加新角色",
	"Settings.roles.list.description": "角色列表",
	"Settings.roles.title.singular": "角色",
	"Settings.sso.description": "配置单点登录功能的设置。",
	"Settings.sso.form.defaultRole.description": "它会将新的认证用户连接到所选角色",
	"Settings.sso.form.defaultRole.description-not-allowed": "您需要具有读取管理角色的权限",
	"Settings.sso.form.defaultRole.label": "默认角色",
	"Settings.sso.form.localAuthenticationLock.label": "本地认证锁定",
	"Settings.sso.form.localAuthenticationLock.description": "选择要禁用本地认证的角色",
	"Settings.sso.form.registration.description": "如果没有账户,则在SSO登录时创建新用户",
	"Settings.sso.form.registration.label": "自动注册",
	"Settings.sso.title": "单点登录",
	"Settings.tokens.Button.cancel": "取消",
	"Settings.tokens.Button.regenerate": "重新生成",
	"Settings.tokens.ListView.headers.createdAt": "创建时间",
	"Settings.tokens.ListView.headers.description": "描述",
	"Settings.tokens.ListView.headers.lastUsedAt": "上次使用",
	"Settings.tokens.ListView.headers.name": "名称",
	"Settings.tokens.RegenerateDialog.title": "重新生成令牌",
	"Settings.tokens.copy.editMessage": "出于安全考虑,您只能看一次令牌。",
	"Settings.tokens.copy.editTitle": "此令牌不再可访问。",
	"Settings.tokens.copy.lastWarning": "请务必复制此令牌,您将无法再次查看它!",
	"Settings.tokens.duration.30-days": "30天",
	"Settings.tokens.duration.7-days": "7天",
	"Settings.tokens.duration.90-days": "90天",
	"Settings.tokens.duration.expiration-date": "到期日期",
	"Settings.tokens.duration.unlimited": "无限期",
	"Settings.tokens.form.description": "描述",
	"Settings.tokens.form.duration": "令牌持续时间",
	"Settings.tokens.form.name": "名称",
	"Settings.tokens.form.type": "令牌类型",
	"Settings.tokens.notification.copied": "令牌已复制到剪贴板。",
	"Settings.tokens.popUpWarning.message": "您确定要重新生成此令牌吗?",
	"Settings.tokens.regenerate": "重新生成",
	"Settings.tokens.types.custom": "自定义",
	"Settings.tokens.types.full-access": "完全访问",
	"Settings.tokens.types.read-only": "只读",
	"Settings.transferTokens.ListView.headers.type": "令牌类型",
	"Settings.transferTokens.addFirstToken": "添加您的第一个传输令牌",
	"Settings.transferTokens.addNewToken": "添加新的传输令牌",
	"Settings.transferTokens.create": "创建新的传输令牌",
	"Settings.transferTokens.createPage.title": "创建传输令牌",
	"Settings.transferTokens.description": "生成的传输令牌列表",
	"Settings.transferTokens.emptyStateLayout": "您还没有任何内容...",
	"Settings.transferTokens.title": "传输令牌",
	"Settings.webhooks.create": "创建webhook",
	"Settings.webhooks.create.header": "创建新标头",
	"Settings.webhooks.created": "Webhook已创建",
	"Settings.webhooks.event.publish-tooltip": "此事件仅存在于启用了草稿/发布系统的内容中",
	"Settings.webhooks.event.select": "选择事件",
	"Settings.webhooks.events.isLoading": "事件加载中",
	"Settings.webhooks.events.create": "创建",
	"Settings.webhooks.events.update": "更新",
	"Settings.webhooks.events.delete": "删除webhook",
	"Settings.webhooks.form.events": "事件",
	"Settings.webhooks.form.headers": "标头",
	"Settings.webhooks.form.url": "网址",
	"Settings.webhooks.headers.remove": "移除标头行{number}",
	"Settings.webhooks.key": "密钥",
	"Settings.webhooks.list.button.add": "创建新webhook",
	"Settings.webhooks.list.description": "获取POST更改通知",
	"Settings.webhooks.list.empty.description": "找不到webhook",
	"Settings.webhooks.list.empty.link": "请参阅我们的文档",
	"Settings.webhooks.list.empty.title": "还没有webhook",
	"Settings.webhooks.list.th.actions": "操作",
	"Settings.webhooks.list.th.status": "状态",
	"Settings.webhooks.list.loading.success": "Webhook已加载",
	"Settings.webhooks.singular": "webhook",
	"Settings.webhooks.title": "Webhook",
	"Settings.webhooks.to.delete": "选择了 {webhooksToDeleteLength, plural, one {# 个webhook} other {# 个webhooks}}",
	"Settings.webhooks.trigger": "触发器",
	"Settings.webhooks.trigger.cancel": "取消触发",
	"Settings.webhooks.trigger.pending": "待定...",
	"Settings.webhooks.trigger.save": "请先保存以触发",
	"Settings.webhooks.trigger.success": "成功!",
	"Settings.webhooks.trigger.success.label": "触发成功",
	"Settings.webhooks.trigger.test": "测试触发",
	"Settings.webhooks.trigger.title": "保存前触发",
	"Settings.webhooks.value": "值",
	"Settings.webhooks.validation.name.required": "名称是必需的",
	"Settings.webhooks.validation.name.regex": "名称必须以字母开头,并且只能包含字母、数字、空格和下划线",
	"Settings.webhooks.validation.url.required": "网址为必填",
	"Settings.webhooks.validation.url.regex": "值必须为有效的网址",
	"Settings.webhooks.validation.key": "密钥是必需的",
	"Settings.webhooks.validation.value": "值是必需的",
	"Usecase.back-end": "后端开发者",
	"Usecase.button.skip": "跳过此问题",
	"Usecase.content-creator": "内容创建者",
	"Usecase.front-end": "前端开发者",
	"Usecase.full-stack": "全栈开发者",
	"Usecase.input.work-type": "您的工作类型是什么?",
	"Usecase.notification.success.project-created": "项目已成功创建",
	"Usecase.other": "其他",
	"Usecase.title": "告诉我们更多关于您自己的信息",
	Username: Username,
	"Users & Permissions": "用户和权限",
	Users: Users,
	"Users.components.List.empty": "没有用户...",
	"Users.components.List.empty.withFilters": "使用应用的筛选条件没有用户...",
	"Users.components.List.empty.withSearch": "没有与搜索({search})对应的用户...",
	"admin.pages.MarketPlacePage.sort.label": "排序方式",
	"admin.pages.MarketPlacePage.filters.categories": "类别",
	"admin.pages.MarketPlacePage.filters.categoriesSelected": "选择了{count, plural, =0 {无类别} one {# 个类别} other {# 个类别}}",
	"admin.pages.MarketPlacePage.filters.collections": "集合",
	"admin.pages.MarketPlacePage.filters.collectionsSelected": "选择了{count, plural, =0 {无集合} one {# 个集合} other {# 个集合}}",
	"admin.pages.MarketPlacePage.head": "市场 - 插件",
	"admin.pages.MarketPlacePage.missingPlugin.description": "告诉我们您正在寻找的插件,这样如果社区的插件开发者也在寻找灵感,我们可以让他们知道!",
	"admin.pages.MarketPlacePage.missingPlugin.title": "缺少插件?",
	"admin.pages.MarketPlacePage.offline.subtitle": "您需要连接到互联网才能访问Strapi市场。",
	"admin.pages.MarketPlacePage.offline.title": "您处于离线状态",
	"admin.pages.MarketPlacePage.plugin.copy": "复制安装命令",
	"admin.pages.MarketPlacePage.plugin.copy.success": "安装命令已准备好粘贴到终端中",
	"admin.pages.MarketPlacePage.plugin.downloads": "此插件的每周下载量为{downloadsCount}",
	"admin.pages.MarketPlacePage.plugin.githubStars": "此插件在GitHub上获得了{starsCount}星",
	"admin.pages.MarketPlacePage.plugin.info": "了解更多",
	"admin.pages.MarketPlacePage.plugin.info.label": "了解更多关于{pluginName}的信息",
	"admin.pages.MarketPlacePage.plugin.info.text": "更多",
	"admin.pages.MarketPlacePage.plugin.installed": "已安装",
	"admin.pages.MarketPlacePage.plugin.tooltip.madeByStrapi": "由Strapi制作",
	"admin.pages.MarketPlacePage.plugin.tooltip.verified": "插件经过Strapi验证",
	"admin.pages.MarketPlacePage.plugin.version": "请更新Strapi版本: \"{strapiAppVersion}\" 至 \"{versionRange}\"",
	"admin.pages.MarketPlacePage.plugin.version.null": "无法验证与Strapi版本的兼容性: \"{strapiAppVersion}\"",
	"admin.pages.MarketPlacePage.plugins": "插件",
	"admin.pages.MarketPlacePage.provider.downloads": "此提供商有{downloadsCount}次每周下载",
	"admin.pages.MarketPlacePage.provider.githubStars": "此提供商在GitHub上获得了{starsCount}星",
	"admin.pages.MarketPlacePage.providers": "提供商",
	"admin.pages.MarketPlacePage.search.clear": "清除搜索",
	"admin.pages.MarketPlacePage.search.empty": "没有\"{target}\"的结果",
	"admin.pages.MarketPlacePage.search.placeholder": "搜索",
	"admin.pages.MarketPlacePage.sort.alphabetical": "字母顺序",
	"admin.pages.MarketPlacePage.sort.alphabetical.selected": "按字母顺序排序",
	"admin.pages.MarketPlacePage.sort.githubStars": "GitHub星数",
	"admin.pages.MarketPlacePage.sort.githubStars.selected": "按GitHub星数排序",
	"admin.pages.MarketPlacePage.sort.newest": "最新",
	"admin.pages.MarketPlacePage.sort.newest.selected": "按最新排序",
	"admin.pages.MarketPlacePage.sort.npmDownloads": "下载次数",
	"admin.pages.MarketPlacePage.sort.npmDownloads.selected": "按npm下载量排序",
	"admin.pages.MarketPlacePage.submit.plugin.link": "提交插件",
	"admin.pages.MarketPlacePage.submit.provider.link": "提交提供商",
	"admin.pages.MarketPlacePage.subtitle": "轻松扩展您的应用程序",
	"admin.pages.MarketPlacePage.tab-group.label": "适用于Strapi的插件和提供商",
	anErrorOccurred: anErrorOccurred,
	"app.component.CopyToClipboard.label": "复制到剪贴板",
	"app.component.search.label": "搜索{target}",
	"app.component.table.duplicate": "重复{target}",
	"app.component.table.edit": "编辑{target}",
	"app.component.table.read": "读取{target}",
	"app.component.table.select.one-entry": "选择{target}",
	"app.component.table.view": "{target} 详情",
	"app.components.BlockLink.blog": "博客",
	"app.components.BlockLink.blog.content": "阅读关于Strapi和生态系统的最新新闻。",
	"app.components.BlockLink.cloud": "Strapi云",
	"app.components.BlockLink.cloud.content": "一个完全可组合且协作的平台,可提高团队的工作效率。",
	"app.components.BlockLink.code": "代码示例",
	"app.components.BlockLink.code.content": "通过测试社区开发的真实项目来学习。",
	"app.components.BlockLink.documentation.content": "发现基本概念、指南和说明。",
	"app.components.BlockLink.tutorial": "教程",
	"app.components.BlockLink.tutorial.content": "按照步骤说明使用和自定义Strapi。",
	"app.components.Button.cancel": "取消",
	"app.components.Button.confirm": "确认",
	"app.components.Button.reset": "重置",
	"app.components.ComingSoonPage.comingSoon": "即将推出",
	"app.components.ConfirmDialog.title": "确认",
	"app.components.DownloadInfo.download": "下载进行中...",
	"app.components.DownloadInfo.text": "这可能需要一分钟。感谢您的耐心等待。",
	"app.components.EmptyAttributes.title": "还没有字段",
	"app.components.EmptyStateLayout.content-document": "找不到内容",
	"app.components.EmptyStateLayout.content-permissions": "您没有权限访问该内容",
	"app.components.GuidedTour.CM.create.content": "<p>在此处的内容管理器中创建和管理所有内容。</p><p>例如:进一步考虑博客网站的例子,可以根据喜好编写、保存和发布文章。</p><p>💡 快速提示 — 不要忘记发布您创建的内容。</p>",
	"app.components.GuidedTour.CM.create.title": "⚡️ 创建内容",
	"app.components.GuidedTour.CM.success.content": "<p>太棒了,还剩最后一步!</p><b>🚀 查看实际内容</b>",
	"app.components.GuidedTour.CM.success.cta.title": "测试API",
	"app.components.GuidedTour.CM.success.title": "第2步:完成 ✅",
	"app.components.GuidedTour.CTB.create.content": "<p>集合类型有助于管理多个条目,单个类型适合管理仅一个条目。</p> <p>例如:对于博客网站,文章将是集合类型,而首页将是单个类型。</p>",
	"app.components.GuidedTour.CTB.create.cta.title": "构建一个集合类型",
	"app.components.GuidedTour.CTB.create.title": "🧠 创建第一个集合类型",
	"app.components.GuidedTour.CTB.success.content": "<p>干得好!</p><b>⚡️ 您想与世界分享什么?</b>",
	"app.components.GuidedTour.CTB.success.title": "第1步:完成 ✅",
	"app.components.GuidedTour.apiTokens.create.content": "<p>在此生成认证令牌并检索您刚创建的内容。</p>",
	"app.components.GuidedTour.apiTokens.create.cta.title": "生成API令牌",
	"app.components.GuidedTour.apiTokens.create.title": "🚀 查看实际内容",
	"app.components.GuidedTour.apiTokens.success.content": "<p>通过发出HTTP请求查看实际内容:</p><ul><li><p>网址: <light>https://'<'YOUR_DOMAIN'>'/api/'<'YOUR_CT'>'</light></p></li><li><p>标头: <light>Authorization: bearer '<'YOUR_API_TOKEN'>'</light></p></li></ul><p>有关与内容交互的更多方式,请参阅<documentationLink>文档</documentationLink>。</p>",
	"app.components.GuidedTour.apiTokens.success.cta.title": "返回主页",
	"app.components.GuidedTour.apiTokens.success.title": "第3步:完成 ✅",
	"app.components.GuidedTour.create-content": "创建内容",
	"app.components.GuidedTour.home.CM.title": "⚡️ 您想与世界分享什么?",
	"app.components.GuidedTour.home.CTB.cta.title": "转到内容类型构建器",
	"app.components.GuidedTour.home.CTB.title": "🧠 构建内容结构",
	"app.components.GuidedTour.home.apiTokens.cta.title": "测试API",
	"app.components.GuidedTour.skip": "跳过导览",
	"app.components.GuidedTour.title": "开始的3个步骤",
	"app.components.HomePage.button.blog": "在博客上查看更多信息",
	"app.components.HomePage.community": "加入社区",
	"app.components.HomePage.community.content": "在不同的渠道中与团队成员、贡献者和开发人员进行讨论。",
	"app.components.HomePage.create": "创建您的第一个内容类型",
	"app.components.HomePage.roadmap": "查看路线图",
	"app.components.HomePage.welcome": "欢迎登机 👋",
	"app.components.HomePage.welcome.again": "欢迎 👋",
	"app.components.HomePage.welcomeBlock.content": "恭喜您!您已登录为第一个管理员。为了发现Strapi提供的强大功能,我们建议您创建您的第一个内容类型!",
	"app.components.HomePage.welcomeBlock.content.again": "我们希望您在项目上取得进展!请随时阅读关于Strapi的最新新闻。我们正根据您的反馈尽最大努力改进产品。",
	"app.components.HomePage.welcomeBlock.content.issues": "问题。",
	"app.components.HomePage.welcomeBlock.content.raise": " 或提出 ",
	"app.components.ImgPreview.hint": "将文件拖放到此区域或{browse}上传文件",
	"app.components.ImgPreview.hint.browse": "浏览",
	"app.components.InputFile.newFile": "添加新文件",
	"app.components.InputFileDetails.open": "在新标签页中打开",
	"app.components.InputFileDetails.originalName": "原始名称:",
	"app.components.InputFileDetails.remove": "删除此文件",
	"app.components.InputFileDetails.size": "大小:",
	"app.components.InstallPluginPage.Download.description": "下载和安装插件可能需要几秒钟。",
	"app.components.InstallPluginPage.Download.title": "正在下载...",
	"app.components.InstallPluginPage.description": "轻松扩展您的应用程序。",
	"app.components.LeftMenu.collapse": "折叠导航栏",
	"app.components.LeftMenu.expand": "展开导航栏",
	"app.components.LeftMenu.general": "常规",
	"app.components.LeftMenu.logo.alt": "应用程序徽标",
	"app.components.LeftMenu.logout": "登出",
	"app.components.LeftMenu.navbrand.title": "Strapi控制面板",
	"app.components.LeftMenu.navbrand.workplace": "工作区",
	"app.components.LeftMenu.plugins": "插件",
	"app.components.LeftMenuFooter.help": "帮助",
	"app.components.LeftMenuFooter.poweredBy": "技术支持 ",
	"app.components.LeftMenuLinkContainer.collectionTypes": "集合类型",
	"app.components.LeftMenuLinkContainer.configuration": "配置",
	"app.components.LeftMenuLinkContainer.general": "常规",
	"app.components.LeftMenuLinkContainer.noPluginsInstalled": "还未安装插件",
	"app.components.LeftMenuLinkContainer.plugins": "插件",
	"app.components.LeftMenuLinkContainer.singleTypes": "单个类型",
	"app.components.ListPluginsPage.deletePlugin.description": "卸载插件可能需要几秒钟。",
	"app.components.ListPluginsPage.deletePlugin.title": "卸载中",
	"app.components.ListPluginsPage.description": "项目中安装的插件列表。",
	"app.components.ListPluginsPage.head.title": "插件列表",
	"app.components.Logout.logout": "登出",
	"app.components.Logout.profile": "简介",
	"app.components.MarketplaceBanner": "在Strapi市场上发现社区构建的插件,以及许多其他很酷的东西来启动您的项目。",
	"app.components.MarketplaceBanner.image.alt": "一个Strapi火箭标志",
	"app.components.MarketplaceBanner.link": "立即查看",
	"app.components.NotFoundPage.back": "返回主页",
	"app.components.NotFoundPage.description": "未找到",
	"app.components.Official": "官方",
	"app.components.Onboarding.help.button": "帮助按钮",
	"app.components.Onboarding.label.completed": "% 已完成",
	"app.components.Onboarding.link.build-content": "构建内容架构",
	"app.components.Onboarding.link.manage-content": "添加和管理内容",
	"app.components.Onboarding.link.manage-media": "管理媒体",
	"app.components.Onboarding.link.more-videos": "观看更多视频",
	"app.components.Onboarding.title": "入门视频",
	"app.components.PluginCard.Button.label.download": "下载",
	"app.components.PluginCard.Button.label.install": "已安装",
	"app.components.PluginCard.PopUpWarning.install.impossible.autoReload.needed": "需要启用autoReload功能。请使用 yarn develop 启动您的应用程序。",
	"app.components.PluginCard.PopUpWarning.install.impossible.confirm": "我明白!",
	"app.components.PluginCard.PopUpWarning.install.impossible.environment": "出于安全考虑,只能在开发环境中下载插件。",
	"app.components.PluginCard.PopUpWarning.install.impossible.title": "无法下载",
	"app.components.PluginCard.compatible": "与您的应用程序兼容",
	"app.components.PluginCard.compatibleCommunity": "与社区兼容",
	"app.components.PluginCard.more-details": "更多详情",
	"app.components.ToggleCheckbox.off-label": "否",
	"app.components.ToggleCheckbox.on-label": "是",
	"app.components.Users.MagicLink.connect": "复制并共享此链接以授予此用户访问权限",
	"app.components.Users.MagicLink.connect.sso": "将此链接发送给用户,首次登录可以通过SSO提供商完成",
	"app.components.Users.ModalCreateBody.block-title.details": "用户详情",
	"app.components.Users.ModalCreateBody.block-title.roles": "用户的角色",
	"app.components.Users.ModalCreateBody.block-title.roles.description": "用户可以拥有一个或多个角色",
	"app.components.Users.SortPicker.button-label": "排序方式",
	"app.components.Users.SortPicker.sortby.email_asc": "电子邮件(A至Z)",
	"app.components.Users.SortPicker.sortby.email_desc": "电子邮件(Z至A)",
	"app.components.Users.SortPicker.sortby.firstname_asc": "名字(A至Z)",
	"app.components.Users.SortPicker.sortby.firstname_desc": "名字(Z至A)",
	"app.components.Users.SortPicker.sortby.lastname_asc": "姓氏(A至Z)",
	"app.components.Users.SortPicker.sortby.lastname_desc": "姓氏(Z至A)",
	"app.components.Users.SortPicker.sortby.username_asc": "用户名(A至Z)",
	"app.components.Users.SortPicker.sortby.username_desc": "用户名(Z至A)",
	"app.components.listPlugins.button": "新增插件",
	"app.components.listPlugins.title.none": "未安装插件",
	"app.components.listPluginsPage.deletePlugin.error": "卸载插件时出错",
	"app.containers.App.notification.error.init": "请求API时出错",
	"app.containers.AuthPage.ForgotPasswordSuccess.text.contact-admin": "如果您没有收到此链接,请联系您的管理员。",
	"app.containers.AuthPage.ForgotPasswordSuccess.text.email": "重置密码链接需要几分钟才能收到。",
	"app.containers.AuthPage.ForgotPasswordSuccess.title": "电子邮件已发送",
	"app.containers.Users.EditPage.form.active.label": "激活",
	"app.containers.Users.EditPage.header.label": "编辑 {name}",
	"app.containers.Users.EditPage.header.label-loading": "编辑用户",
	"app.containers.Users.EditPage.roles-bloc-title": "分配的角色",
	"app.containers.Users.ModalForm.footer.button-success": "邀请用户",
	"app.links.configure-view": "配置视图",
	"app.page.not.found": "哎呀!我们似乎找不到您要查找的页面...",
	"app.static.links.cheatsheet": "速查表",
	"app.utils.SelectOption.defaultMessage": " ",
	"app.utils.add-filter": "添加筛选器",
	"app.utils.close-label": "关闭",
	"app.utils.defaultMessage": " ",
	"app.utils.delete": "删除",
	"app.utils.duplicate": "重复",
	"app.utils.edit": "编辑",
	"app.utils.errors.file-too-big.message": "文件太大",
	"app.utils.filter-value": "筛选值",
	"app.utils.filters": "筛选器",
	"app.utils.notify.data-loaded": "{target}已加载",
	"app.utils.placeholder.defaultMessage": " ",
	"app.utils.publish": "发布",
	"app.utils.select-all": "全选",
	"app.utils.select-field": "选择字段",
	"app.utils.select-filter": "选择筛选器",
	"app.utils.unpublish": "取消发布",
	clearLabel: clearLabel,
	"coming.soon": "此内容目前正在建设中,将在几周内重新上线!",
	"component.Input.error.validation.integer": "值必须为整数",
	"components.AutoReloadBlocker.description": "使用以下命令之一运行Strapi:",
	"components.AutoReloadBlocker.header": "此插件需要重载功能。",
	"components.ErrorBoundary.title": "出了些问题...",
	"components.FilterOptions.FILTER_TYPES.$contains": "包含(区分大小写)",
	"components.FilterOptions.FILTER_TYPES.$endsWith": "结尾为",
	"components.FilterOptions.FILTER_TYPES.$eq": "等于",
	"components.FilterOptions.FILTER_TYPES.$gt": "大于",
	"components.FilterOptions.FILTER_TYPES.$gte": "大于或等于",
	"components.FilterOptions.FILTER_TYPES.$lt": "小于",
	"components.FilterOptions.FILTER_TYPES.$lte": "小于或等于",
	"components.FilterOptions.FILTER_TYPES.$ne": "不等于",
	"components.FilterOptions.FILTER_TYPES.$notContains": "不包含(区分大小写)",
	"components.FilterOptions.FILTER_TYPES.$notNull": "不为空",
	"components.FilterOptions.FILTER_TYPES.$null": "为空",
	"components.FilterOptions.FILTER_TYPES.$startsWith": "开头为",
	"components.Input.error.attribute.key.taken": "此值已存在",
	"components.Input.error.attribute.sameKeyAndName": "不能相等",
	"components.Input.error.attribute.taken": "此字段名称已存在",
	"components.Input.error.contain.lowercase": "密码必须包含至少一个小写字符",
	"components.Input.error.contain.number": "密码必须包含至少一个数字",
	"components.Input.error.contain.uppercase": "密码必须包含至少一个大写字符",
	"components.Input.error.contentTypeName.taken": "此名称已被使用",
	"components.Input.error.custom-error": "{errorMessage} ",
	"components.Input.error.password.noMatch": "密码不匹配",
	"components.Input.error.validation.email": "这是一个无效的电子邮件",
	"components.Input.error.validation.json": "这与JSON格式不匹配",
	"components.Input.error.validation.lowercase": "值必须为小写字符串",
	"components.Input.error.validation.max": "值太大(最大值:{max})。",
	"components.Input.error.validation.maxLength": "值太长(最大长度:{max})。",
	"components.Input.error.validation.min": "值太小(最小值:{min})。",
	"components.Input.error.validation.minLength": "值太短(最小长度:{min})。",
	"components.Input.error.validation.minSupMax": "不能高于",
	"components.Input.error.validation.regex": "值与正则表达式不匹配。",
	"components.Input.error.validation.required": "此值是必需的。",
	"components.Input.error.validation.unique": "此值已被使用。",
	"components.InputSelect.option.placeholder": "请选择",
	"components.ListRow.empty": "没有要显示的数据。",
	"components.NotAllowedInput.text": "无权查看此字段",
	"components.OverlayBlocker.description": "您正在使用需要服务器重启的功能。请等到服务器启动。",
	"components.OverlayBlocker.description.serverError": "服务器本应重启,请在终端中检查日志。",
	"components.OverlayBlocker.title": "等待重启...",
	"components.OverlayBlocker.title.serverError": "重启花费的时间比预期更长",
	"components.PageFooter.select": "每页条目数",
	"components.ProductionBlocker.description": "出于安全考虑,我们必须在其他环境中禁用此插件。",
	"components.ProductionBlocker.header": "此插件仅在开发环境中可用。",
	"components.Search.placeholder": "搜索...",
	"components.TableHeader.sort": "按{label}排序",
	"components.Wysiwyg.ToggleMode.markdown-mode": "Markdown模式",
	"components.Wysiwyg.ToggleMode.preview-mode": "预览模式",
	"components.Wysiwyg.collapse": "折叠",
	"components.Wysiwyg.selectOptions.H1": "标题 H1",
	"components.Wysiwyg.selectOptions.H2": "标题 H2",
	"components.Wysiwyg.selectOptions.H3": "标题 H3",
	"components.Wysiwyg.selectOptions.H4": "标题 H4",
	"components.Wysiwyg.selectOptions.H5": "标题 H5",
	"components.Wysiwyg.selectOptions.H6": "标题 H6",
	"components.Wysiwyg.selectOptions.title": "添加标题",
	"components.WysiwygBottomControls.charactersIndicators": "字符",
	"components.WysiwygBottomControls.fullscreen": "展开",
	"components.WysiwygBottomControls.uploadFiles": "拖放文件、从剪贴板粘贴或 {browse}。",
	"components.WysiwygBottomControls.uploadFiles.browse": "选择它们",
	"components.pagination.go-to": "转到第{page}页",
	"components.pagination.go-to-next": "转到下一页",
	"components.pagination.go-to-previous": "转到上一页",
	"components.pagination.remaining-links": "还有 {number} 个其它链接",
	"components.popUpWarning.button.cancel": "不,取消",
	"components.popUpWarning.button.confirm": "是的,确认",
	"components.popUpWarning.message": "您确定要删除此内容吗?",
	"components.popUpWarning.title": "请确认",
	dark: dark,
	"form.button.continue": "继续",
	"form.button.done": "完成",
	"global.actions": "操作",
	"global.auditLogs": "审核日志",
	"global.back": "返回",
	"global.cancel": "取消",
	"global.change-password": "更改密码",
	"global.close": "关闭",
	"global.content-manager": "内容管理器",
	"global.continue": "继续",
	"global.delete": "删除",
	"global.delete-target": "删除 {target}",
	"global.description": "描述",
	"global.details": "详情",
	"global.disabled": "已禁用",
	"global.documentation": "文档",
	"global.enabled": "已启用",
	"global.finish": "完成",
	"global.marketplace": "市场",
	"global.name": "名称",
	"global.none": "无",
	"global.password": "密码",
	"global.plugins": "插件",
	"global.plugins.content-manager": "内容管理器",
	"global.plugins.content-manager.description": "快速查看、编辑和删除数据库中的数据的方法。",
	"global.plugins.content-type-builder": "内容类型构建器",
	"global.plugins.content-type-builder.description": "为您的 API 建模数据结构。在短短一分钟内创建新的字段和关系。文件会自动在您的项目中创建和更新。",
	"global.plugins.documentation": "文档",
	"global.plugins.documentation.description": "创建 OpenAPI 文档并通过 SWAGGER UI 可视化您的 API。",
	"global.plugins.email": "电子邮件",
	"global.plugins.email.description": "配置您的应用程序以发送电子邮件。",
	"global.plugins.graphql": "GraphQL",
	"global.plugins.graphql.description": "添加具有默认 API 方法的 GraphQL 端点。",
	"global.plugins.i18n": "国际化",
	"global.plugins.i18n.description": "此插件可让您使用不同语言在管理面板和 API 中创建、读取和更新内容。",
	"global.plugins.sentry": "Sentry",
	"global.plugins.sentry.description": "将 Strapi 错误事件发送到 Sentry。",
	"global.plugins.upload": "媒体库",
	"global.plugins.upload.description": "媒体文件管理。",
	"global.plugins.users-permissions": "角色和权限",
	"global.plugins.users-permissions.description": "基于 JWT 的完整认证流程来保护您的 API。此插件还带有一个 ACL 策略,允许您在用户组之间管理权限。",
	"global.profile": "简介",
	"global.prompt.unsaved": "您确定要离开此页面吗?您的所有修改都将丢失",
	"global.reset-password": "重置密码",
	"global.roles": "角色",
	"global.save": "保存",
	"global.search": "搜索",
	"global.see-more": "查看更多",
	"global.select": "选择",
	"global.select-all-entries": "全选条目",
	"global.settings": "设置",
	"global.type": "类型",
	"global.users": "用户",
	light: light,
	"notification.contentType.relations.conflict": "内容类型存在冲突关系",
	"notification.default.title": "信息:",
	"notification.ee.warning.at-seat-limit.title": "已达 {licenseLimitStatus, select, OVER_LIMIT {超出} AT_LIMIT {到达}} 座位限制 ({currentUserCount}/{permittedSeats})",
	"notification.ee.warning.over-.message": "添加座位以 {licenseLimitStatus, select, OVER_LIMIT {邀请} AT_LIMIT {重新启用}} 用户。如果您已经这样做,但 Strapi 尚未反映出来,请确保重新启动您的应用程序。",
	"notification.error": "发生错误",
	"notification.error.invalid.configuration": "您的配置无效,请在服务器日志中查看更多信息。",
	"notification.error.layout": "无法检索布局",
	"notification.error.tokennamenotunique": "名称已被分配给其他令牌",
	"notification.form.error.fields": "表单包含一些错误",
	"notification.form.success.fields": "更改已保存",
	"notification.link-copied": "链接已复制到剪贴板",
	"notification.permission.not-allowed-read": "您无权查看此文档",
	"notification.success.apitokencreated": "API令牌已成功创建",
	"notification.success.apitokenedited": "API令牌已成功编辑",
	"notification.success.delete": "项目已被删除",
	"notification.success.saved": "已保存",
	"notification.success.title": "成功:",
	"notification.success.transfertokencreated": "传输令牌已成功创建",
	"notification.success.transfertokenedited": "传输令牌已成功编辑",
	"notification.version.update.message": "有新版本的Strapi可用!",
	"notification.warning.404": "404 - 未找到",
	"notification.warning.title": "警告:",
	or: or,
	"request.error.model.unknown": "此模型不存在",
	selectButtonTitle: selectButtonTitle,
	skipToContent: skipToContent,
	submit: submit
};

exports.Analytics = Analytics;
exports.Documentation = Documentation;
exports.Email = Email;
exports.Password = Password;
exports.Provider = Provider;
exports.ResetPasswordToken = ResetPasswordToken;
exports.Role = Role;
exports.Username = Username;
exports.Users = Users;
exports.anErrorOccurred = anErrorOccurred;
exports.clearLabel = clearLabel;
exports.dark = dark;
exports.default = zhHans;
exports.light = light;
exports.or = or;
exports.selectButtonTitle = selectButtonTitle;
exports.skipToContent = skipToContent;
exports.submit = submit;
//# sourceMappingURL=zh-Hans-BlfT-iYf.js.map