"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const sv = {
  "BoundRoute.title": "Bind rutt till",
  "EditForm.inputSelect.description.role": "Den bifogar den nya autentiserade användaren till den valda rollen.",
  "EditForm.inputSelect.label.role": "Standardroll för autentiserade användare",
  "EditForm.inputToggle.description.email": "Tillåt ej användaren att skapa flera konton med samma e-postadress med olika autentiseringstjänster.",
  "EditForm.inputToggle.description.email-confirmation": "När aktiverat (PÅ) får nya registrerade användare ett bekräftelsemeddelande.",
  "EditForm.inputToggle.description.email-confirmation-redirection": "När du har bekräftat din e-post väljer du var du ska omdirigeras.",
  "EditForm.inputToggle.description.email-reset-password": "URL:en till din applikations sida för återställning av lösenord",
  "EditForm.inputToggle.description.sign-up": "När inaktiverad (AV) är registreringsprocessen förbjuden. Ingen kan prenumerera längre oavsett vilken autentiseringstjänst som används.",
  "EditForm.inputToggle.label.email": "Ett konto per e-postadress",
  "EditForm.inputToggle.label.email-confirmation": "Aktivera e-postbekräftelse",
  "EditForm.inputToggle.label.email-confirmation-redirection": "Omdirigerings-url",
  "EditForm.inputToggle.label.email-reset-password": "Återställ lösenordssidan",
  "EditForm.inputToggle.label.sign-up": "Tillåt registreringar",
  "EditForm.inputToggle.placeholder.email-confirmation-redirection": "t.ex: https://yourfrontend.com/email-confirmation-redirection",
  "EditForm.inputToggle.placeholder.email-reset-password": "t.ex: https://yourfrontend.com/reset-password",
  "EditPage.form.roles": "Rolldetaljer",
  "Email.template.data.loaded": "E-postmallar har laddats",
  "Email.template.email_confirmation": "Bekräftelse av e-postadress",
  "Email.template.form.edit.label": "Redigera en mall",
  "Email.template.table.action.label": "händelse",
  "Email.template.table.icon.label": "ikon",
  "Email.template.table.name.label": "namn",
  "Form.advancedSettings.data.loaded": "Data för avancerade inställningar har laddats",
  "HeaderNav.link.advancedSettings": "Avancerade inställningar",
  "HeaderNav.link.emailTemplates": "E-postmall",
  "HeaderNav.link.providers": "Autentiseringstjänster",
  "Plugin.permissions.plugins.description": "Definiera alla tillåtna åtgärder för {name} plugin.",
  "Plugins.header.description": "Endast åtgärder som är bundna av en rutt listas nedan.",
  "Plugins.header.title": "Behörigheter",
  "Policies.header.hint": "Välj programmets åtgärder eller plugins åtgärder och klicka på kugghjulsikonen för att visa den bundna rutten",
  "Policies.header.title": "Avancerade inställningar",
  "PopUpForm.Email.email_templates.inputDescription": "Om du är osäker på hur du använder variabler, {link}",
  "PopUpForm.Email.link.documentation": "Kolla in vår dokumentation.",
  "PopUpForm.Email.options.from.email.label": "Avsändarens e-postadress",
  "PopUpForm.Email.options.from.email.placeholder": "kai@doe.com",
  "PopUpForm.Email.options.from.name.label": "Avsändarens namn",
  "PopUpForm.Email.options.from.name.placeholder": "Kai Doe",
  "PopUpForm.Email.options.message.label": "Meddelande",
  "PopUpForm.Email.options.object.label": "Ämne",
  "PopUpForm.Email.options.object.placeholder": "Bekräfta din e-postadress för %APP_NAME%",
  "PopUpForm.Email.options.response_email.label": "Svarsmail",
  "PopUpForm.Email.options.response_email.placeholder": "kai@doe.com",
  "PopUpForm.Providers.enabled.description": "Om inaktiverat kan användarna inte använda den här tjänsten.",
  "PopUpForm.Providers.enabled.label": "Tillåt",
  "PopUpForm.Providers.key.label": "Klient ID",
  "PopUpForm.Providers.key.placeholder": "TEXT",
  "PopUpForm.Providers.redirectURL.front-end.label": "Omdirigerings-URL: en till din front-end-app",
  "PopUpForm.Providers.redirectURL.label": "Webbadressen för omdirigering som ska läggas till i {Provider} applikationskonfigurationer",
  "PopUpForm.Providers.secret.label": "Klient hemlighet",
  "PopUpForm.Providers.secret.placeholder": "TEXT",
  "PopUpForm.Providers.subdomain.label": "Host URI (Subdomän)",
  "PopUpForm.Providers.subdomain.placeholder": "min.subdoman.com",
  "PopUpForm.header.edit.email-templates": "Redigera e-postmallar",
  "PopUpForm.header.edit.providers": "Redigera tjänst",
  "Providers.data.loaded": "Tjänster har laddats in",
  "Providers.status": "Status",
  "Roles.empty": "Du har inga roller än.",
  "Roles.empty.search": "Inga roller matchar sökningen.",
  "Settings.roles.deleted": "Roll borttagen",
  "Settings.roles.edited": "Roll redigerad",
  "Settings.section-label": "Roller och behörigheter",
  "components.Input.error.validation.email": "E-postadressen är ogiltig",
  "components.Input.error.validation.json": "Detta är inte giltig JSON",
  "components.Input.error.validation.max": "Värdet är för högt.",
  "components.Input.error.validation.maxLength": "Värdet är för långt.",
  "components.Input.error.validation.min": "Värdet är för lågt.",
  "components.Input.error.validation.minLength": "Värdet är för kort.",
  "components.Input.error.validation.minSupMax": "Minsta värdet är större än maximalt värde.",
  "components.Input.error.validation.regex": "Värdet matchar inte regex-mönstret.",
  "components.Input.error.validation.required": "Värdet är obligatoriskt.",
  "components.Input.error.validation.unique": "Detta värdet är redan använt.",
  "notification.success.submit": "Inställningar har uppdaterats",
  "page.title": "Inställningar - Roller",
  "plugin.description.long": "Skydda ditt API med en fullständig autentiseringsprocess baserad på JWT. Detta plugin har också en ACL-strategi som låter dig hantera behörigheterna mellan användargrupperna.",
  "plugin.description.short": "Skydda ditt API med en fullständig autentiseringsprocess baserad på JWT",
  "plugin.name": "Roller och behörigheter",
  "popUpWarning.button.cancel": "Avbryt",
  "popUpWarning.button.confirm": "Bekräfta",
  "popUpWarning.title": "Var god bekräfta",
  "popUpWarning.warning.cancel": "Är du säker att du vill avbryta dina ändringar?"
};
exports.default = sv;
//# sourceMappingURL=sv-Be43LhA9.js.map
