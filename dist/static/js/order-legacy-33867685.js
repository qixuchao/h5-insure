System.register(["./index-legacy-56d6d425.js"],(function(e){"use strict";var a;return{setters:[function(e){a=e.Z}],execute:function(){var l=e("b",(e=>(e.PENDING="-1",e.PAYING="0",e.PAYED="1",e.TIMEOUT="2",e))(l||{}));a([{value:"-1",label:"待处理"},{value:"0",label:"待支付"},{value:"1",label:"已完成"},{value:"2",label:"已失效"}]);var i=e("a",(e=>(e.PENDING="pending",e.PAYING="paying",e.PAYMENT_SUCCESS="paymentSuccess",e.PAYMENT_FAILED="paymentFailed",e.ACCEPT_POLICY="acceptPolicy",e.INSURER_REJECT="insurerReject",e.TIMEOUT="timeout",e.PROCESSING="processing",e.FAILED="failed",e.SUCCESS="success",e.CANCELED="canceled",e.WAIT_IDENTIFICATION="waitIdentification",e.IDENTIFICATION_COMPLETE="identificationComplete",e.AUDIT_PROCESSING="auditProcessing",e.AUDIT_FAILED="auditFailed",e.AUDIT_SUCCESS="auditSuccess",e.UNDERWRITING_FAILED="underWritingFailed",e.UP_PROCESSING="upProcessing",e.INSURANCE_PROCESSING="insuranceProcessing",e.NOTE="note",e.MANUAL_UNDERWRITING="manualUnderWriting",e.UNDER_WRITING_SUCCESS="underWritingSuccess",e))(i||{}));e("O",a([{value:"pending",label:"待处理"},{value:"paying",label:"待支付"},{value:"paymentSuccess",label:"支付成功"},{value:"canceled",label:"已失效"},{value:"paymentFailed",label:"支付失败"},{value:"acceptPolicy",label:"已承保"},{value:"insurerReject",label:"保司拒保"},{value:"timeout",label:"超时失效"},{value:"underWritingSuccess",label:"核保通过"},{value:"note",label:"照会"},{value:"insuranceProcessing",label:"保司处理中"}]))}}}));
