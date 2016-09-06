var viewTest = function (jsoObj) {
	
	var actions = JSON.parse(jsoObj);
	
	var title = 'some title';
	var uri = 'some uri';
	var itBlockString;
	
	var viewTestStart =
		`
var auth = require('../util/Auth');
var ss = require('../util/screenshoter');
var FileBrowser = require('../components/FileBrowser');

describe('ViewWipAttachmentsEdit', function () {
	this.timeout(60000);

	var EC = protractor.ExpectedConditions;
	var fileBrowserTableEl = FileBrowser.getTable();

	before(function () {
		auth.doLogin();
		auth.checkAgreementModal();
		// go to the uri
	});

	after(function () {
		// auth.doLogout();
	});

	afterEach('take a screenshot if a test fails', function () {
		if (this.currentTest.state === 'failed') {
			ss.writeSS(this.currentTest.ssName);
		}
	});

	${itBlockString}
	describe('', function () {
		it('disabled the Add and Remove buttons', function () {
			this._runnable.ssName = 'ViewWipAttachmentsEdit-disabledButtons';

			expect(CommandBar.getRemoveButton().getAttribute('disabled')).to.eventually.equal('true');

			expect(CommandBar.getAddButton().getAttribute('disabled')).to.eventually.equal('true');
		});
	});
});
		`;
	return viewTestContent;
};

module.exports = viewTest;