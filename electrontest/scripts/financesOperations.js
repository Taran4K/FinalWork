let ID
let financesIDS = [];
let finances = [];
let fkeyarray = [];
let bardataprofit = [];
let bardataloss = [];
let bardatasalary = [];
let profitsumm = 0;
let losssumm = 0;
let salarysumm = 0;
let selectedyear = 0;
let budget = [];
var years = [];
var orgsaved;
var currbudgte;
let employees = [];
let departs = [];
let emplposts = [];
let posts = [];

function CountDataForCharts() {

    for (i = 0; i < finances.length; i++) {
        if (finances[i].summ > 0) {
            profitsumm += parseFloat(finances[i].summ);
        } else if (finances[i].description.toString().indexOf("Зарплата") >= 0) {
            salarysumm -= parseFloat(finances[i].summ);
        } else {
            losssumm -= parseFloat(finances[i].summ);
        }
        let yearcurr = finances[i].date_operation.toString().substring(0, 4).toString();

        var checkarray = undefined;
        var data = new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

        switch (finances[i].date_operation.toString().substring(5, 7)) {
            case '01':
                data.January = parseFloat(finances[i].summ);
                if (finances[i].description.toString().indexOf("Зарплата") === -1) {
                    if (bardataprofit.length !== 0) {
                        checkarray = bardataprofit.find((b, index) => {
                            if (b.year.toString() === data.year.toString()) {
                                if (parseFloat(data.January) > 0)
                                    bardataprofit[index].January += data.January;
                                else if (parseFloat(data.January) < 0)
                                    bardataloss[index].January += data.January;
                                return true
                            }
                        })
                    }
                    if (bardataprofit.length === 0 || checkarray === undefined) {
                        if (parseFloat(data.January) > 0) {
                            bardataprofit.push(data);
                            bardataloss.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                            bardatasalary.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                        } else if (parseFloat(data.January) < 0) {
                            bardataloss.push(data);
                            bardataprofit.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                            bardatasalary.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                        }
                    }
                } else {
                    checkarray = bardatasalary.find((b, index) => {
                        if (b.year.toString() === data.year.toString()) {
                            bardatasalary[index].January += data.January;
                            return true
                        }
                    })
                    if (checkarray===undefined) {
                        bardatasalary.push(data);
                        bardataprofit.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                        bardataloss.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                    }
                }
                break;
            case '02':
                data.February = parseFloat(finances[i].summ);
                if (finances[i].description.toString().indexOf("Зарплата") === -1) {
                    if (bardataprofit.length !== 0) {
                        checkarray = bardataprofit.find((b, index) => {
                            if (b.year.toString() === data.year.toString()) {
                                if (data.February > 0)
                                    bardataprofit[index].February += data.February;
                                else if (data.February < 0)
                                    bardataloss[index].February += data.February;
                                return true
                            }
                        })
                    }
                    if (bardataprofit.length === 0 || checkarray === undefined) {
                        if (parseFloat(data.February) > 0) {
                            bardataprofit.push(data);
                            bardataloss.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                            bardatasalary.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                        } else if (parseFloat(data.February) < 0) {
                            bardataloss.push(data);
                            bardataprofit.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                            bardatasalary.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                        }
                    }
                } else {
                    checkarray = bardatasalary.find((b, index) => {
                        if (b.year.toString() === data.year.toString()) {
                            bardatasalary[index].February += data.February;
                            return true
                        }
                    })
                    if (checkarray===undefined) {
                        bardatasalary.push(data);
                        bardataprofit.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                        bardataloss.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                    }
                }
                break;
            case '03':
                data.March = parseFloat(finances[i].summ);
                if (finances[i].description.toString().indexOf("Зарплата") === -1) {
                    if (bardataprofit.length !== 0) {
                        checkarray = bardataprofit.find((b, index) => {
                            if (b.year.toString() === data.year.toString()) {
                                if (data.March > 0)
                                    bardataprofit[index].March += data.March;
                                else if (data.March < 0)
                                    bardataloss[index].March += data.March;
                                return true
                            }
                        })
                    }
                    if (bardataprofit.length === 0 || checkarray === undefined) {
                        if (parseFloat(data.March) > 0) {
                            bardataprofit.push(data);
                            bardataloss.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                            bardatasalary.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                        } else if (parseFloat(data.March) < 0) {
                            bardataloss.push(data);
                            bardataprofit.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                            bardatasalary.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                        }
                    }
                } else {
                    checkarray = bardatasalary.find((b, index) => {
                        if (b.year.toString() === data.year.toString()) {
                            bardatasalary[index].March += data.March;
                            return true
                        }
                    })
                    if (checkarray===undefined) {
                        bardatasalary.push(data);
                        bardataprofit.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                        bardataloss.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                    }
                }
                break;
            case '04':
                data.April = parseFloat(finances[i].summ);
                if (finances[i].description.toString().indexOf("Зарплата") === -1) {
                    if (bardataprofit.length !== 0) {
                        checkarray = bardataprofit.find((b, index) => {
                            if (b.year.toString() === data.year.toString()) {
                                if (data.April > 0)
                                    bardataprofit[index].April += data.April;
                                else if (data.April < 0)
                                    bardataloss[index].April += data.April;
                                return true
                            }
                        })
                    }
                    if (bardataprofit.length === 0 || checkarray === undefined) {
                        if (parseFloat(data.April) > 0) {
                            bardataprofit.push(data);
                            bardataloss.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                            bardatasalary.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                        } else if (parseFloat(data.April) < 0) {
                            bardataloss.push(data);
                            bardataprofit.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                            bardatasalary.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                        }
                    }
                } else {
                    checkarray = bardatasalary.find((b, index) => {
                        if (b.year.toString() === data.year.toString()) {
                            bardatasalary[index].April += data.April;
                            return true
                        }
                    })
                    if (checkarray===undefined) {
                        bardatasalary.push(data);
                        bardataprofit.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                        bardataloss.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                    }
                }
                break;
            case '05':
                data.May = parseFloat(finances[i].summ);
                if (finances[i].description.toString().indexOf("Зарплата") === -1) {
                    if (bardataprofit.length !== 0) {
                        checkarray = bardataprofit.find((b, index) => {
                            if (b.year.toString() === data.year.toString()) {
                                if (data.May > 0)
                                    bardataprofit[index].May += data.May;
                                else if (data.September < 0)
                                    bardataloss[index].May += data.May;
                                return true
                            }
                        })
                    }
                    if (bardataprofit.length === 0 || checkarray === undefined) {
                        if (parseFloat(data.May) > 0) {
                            bardataprofit.push(data);
                            bardataloss.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                            bardatasalary.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                        } else if (parseFloat(data.May) < 0) {
                            bardataloss.push(data);
                            bardataprofit.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                            bardatasalary.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                        }
                    }
                } else {
                    checkarray = bardatasalary.find((b, index) => {
                        if (b.year.toString() === data.year.toString()) {
                            bardatasalary[index].May += data.May;
                            return true
                        }
                    })
                    if (checkarray===undefined) {
                        bardatasalary.push(data);
                        bardataprofit.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                        bardataloss.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                    }
                }
                break;
            case '06':
                data.June = parseFloat(finances[i].summ);
                if (finances[i].description.toString().indexOf("Зарплата") === -1) {
                    if (bardataprofit.length !== 0) {
                        checkarray = bardataprofit.find((b, index) => {
                            if (b.year.toString() === data.year.toString()) {
                                if (data.June > 0)
                                    bardataprofit[index].June += data.June;
                                else if (data.June < 0)
                                    bardataloss[index].June += data.June;
                                return true
                            }
                        })
                    }
                    if (bardataprofit.length === 0 || checkarray === undefined) {
                        if (parseFloat(data.June) > 0) {
                            bardataprofit.push(data);
                            bardataloss.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                            bardatasalary.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                        } else if (parseFloat(data.June) < 0) {
                            bardataloss.push(data);
                            bardataprofit.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                            bardatasalary.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                        }
                    }
                } else {
                    checkarray = bardatasalary.find((b, index) => {
                        if (b.year.toString() === data.year.toString()) {
                            bardatasalary[index].June += data.June;
                            return true
                        }
                    })
                    if (checkarray===undefined) {
                        bardatasalary.push(data);
                        bardataprofit.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                        bardataloss.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                    }
                }
                break;
            case '07':
                data.July = parseFloat(finances[i].summ);
                if (finances[i].description.toString().indexOf("Зарплата") === -1) {
                    if (bardataprofit.length !== 0) {
                        checkarray = bardataprofit.find((b, index) => {
                            if (b.year.toString() === data.year.toString()) {
                                if (data.July > 0)
                                    bardataprofit[index].July += data.July;
                                else if (data.July < 0)
                                    bardataloss[index].July += data.July;
                                return true
                            }
                        })
                    }
                    if (bardataprofit.length === 0 || checkarray === undefined) {
                        if (parseFloat(data.July) > 0) {
                            bardataprofit.push(data);
                            bardataloss.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                            bardatasalary.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                        } else if (parseFloat(data.July) < 0) {
                            bardataloss.push(data);
                            bardataprofit.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                            bardatasalary.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                        }
                    }
                } else {
                    checkarray = bardatasalary.find((b, index) => {
                        if (b.year.toString() === data.year.toString()) {
                            bardatasalary[index].July += data.July;
                            return true
                        }
                    })
                    if (checkarray===undefined) {
                        bardatasalary.push(data);
                        bardataprofit.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                        bardataloss.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                    }
                }
                break;
            case '08':
                data.August = parseFloat(finances[i].summ);
                if (finances[i].description.toString().indexOf("Зарплата") === -1) {
                    if (bardataprofit.length !== 0) {
                        checkarray = bardataprofit.find((b, index) => {
                            if (b.year.toString() === data.year.toString()) {
                                if (data.August > 0)
                                    bardataprofit[index].August += data.August;
                                else if (data.August < 0)
                                    bardataloss[index].August += data.August;
                                return true
                            }
                        })
                    }
                    if (bardataprofit.length === 0 || checkarray === undefined) {
                        if (parseFloat(data.August) > 0) {
                            bardataprofit.push(data);
                            bardataloss.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                            bardatasalary.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                        } else if (parseFloat(data.August) < 0) {
                            bardataloss.push(data);
                            bardataprofit.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                            bardatasalary.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                        }
                    }
                } else {
                    checkarray = bardatasalary.find((b, index) => {
                        if (b.year.toString() === data.year.toString()) {
                            bardatasalary[index].August += data.August;
                            return true
                        }
                    })
                    if (checkarray===undefined) {
                        bardatasalary.push(data);
                        bardataprofit.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                        bardataloss.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                    }
                }
                break;
            case '09':
                data.September = parseFloat(finances[i].summ);
                if (finances[i].description.toString().indexOf("Зарплата") === -1) {
                    if (bardataprofit.length !== 0) {
                        checkarray = bardataprofit.find((b, index) => {
                            if (b.year.toString() === data.year.toString()) {
                                if (data.September > 0)
                                    bardataprofit[index].September += data.September;
                                else if (data.September < 0)
                                    bardataloss[index].September += data.September;
                                return true
                            }
                        })
                    }
                    if (bardataprofit.length === 0 || checkarray === undefined) {
                        if (parseFloat(data.September) > 0) {
                            bardataprofit.push(data);
                            bardataloss.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                            bardatasalary.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                        } else if (parseFloat(data.September) < 0) {
                            bardataloss.push(data);
                            bardataprofit.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                            bardatasalary.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                        }
                    }
                } else {
                    checkarray = bardatasalary.find((b, index) => {
                        if (b.year.toString() === data.year.toString()) {
                            bardatasalary[index].September += data.September;
                            return true
                        }
                    })
                    if (checkarray===undefined) {
                        bardatasalary.push(data);
                        bardataprofit.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                        bardataloss.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                    }
                }
                break;
            case '10':
                data.October = parseFloat(finances[i].summ);
                if (finances[i].description.toString().indexOf("Зарплата") === -1) {
                    if (bardataprofit.length !== 0) {
                        checkarray = bardataprofit.find((b, index) => {
                            if (b.year.toString() === data.year.toString()) {
                                if (data.October > 0)
                                    bardataprofit[index].October += data.October;
                                else if (data.October < 0)
                                    bardataloss[index].October += data.October;
                                return true
                            }
                        })
                    }
                    if (bardataprofit.length === 0 || checkarray === undefined) {
                        if (parseFloat(data.October) > 0) {
                            bardataprofit.push(data);
                            bardataloss.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                            bardatasalary.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                        } else if (parseFloat(data.October) < 0) {
                            bardataloss.push(data);
                            bardataprofit.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                            bardatasalary.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                        }
                    }
                } else {
                    checkarray = bardatasalary.find((b, index) => {
                        if (b.year.toString() === data.year.toString()) {
                            bardatasalary[index].October += data.October;
                            return true
                        }
                    })
                    if (checkarray===undefined) {
                        bardatasalary.push(data);
                        bardataprofit.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                        bardataloss.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                    }
                }
                break;
            case '11':
                data.November = parseFloat(finances[i].summ);
                if (finances[i].description.toString().indexOf("Зарплата") === -1) {
                    if (bardataprofit.length !== 0) {
                        checkarray = bardataprofit.find((b, index) => {
                            if (b.year.toString() === data.year.toString()) {
                                if (data.November > 0)
                                    bardataprofit[index].November += data.November;
                                else if (data.November < 0)
                                    bardataloss[index].November += data.November;
                                return true
                            }
                        })
                    }
                    if (bardataprofit.length === 0 || checkarray === undefined) {
                        if (parseFloat(data.November) > 0) {
                            bardataprofit.push(data);
                            bardataloss.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                            bardatasalary.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                        } else if (parseFloat(data.November) < 0) {
                            bardataloss.push(data);
                            bardataprofit.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                            bardatasalary.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                        }
                    }
                } else {
                    checkarray = bardatasalary.find((b, index) => {
                        if (b.year.toString() === data.year.toString()) {
                            bardatasalary[index].November += data.November;
                            return true
                        }
                    })
                    if (checkarray===undefined) {
                        bardatasalary.push(data);
                        bardataprofit.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                        bardataloss.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                    }
                }
                break;
            case '12':
                data.December = parseFloat(finances[i].summ);
                if (finances[i].description.toString().indexOf("Зарплата") === -1) {
                    if (bardataprofit.length !== 0) {
                        checkarray = bardataprofit.find((b, index) => {
                            if (b.year.toString() === data.year.toString()) {
                                if (data.December > 0)
                                    bardataprofit[index].December += data.December;
                                else if (data.December < 0)
                                    bardataloss[index].December += data.December;
                                return true
                            }
                        })
                    }
                    if (bardataprofit.length === 0 || checkarray === undefined) {
                        if (parseFloat(data.December) > 0) {
                            bardataprofit.push(data);
                            bardataloss.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                            bardatasalary.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                        } else if (parseFloat(data.December) < 0) {
                            bardataloss.push(data);
                            bardataprofit.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                            bardatasalary.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                        }
                    }
                } else {
                    checkarray = bardatasalary.find((b, index) => {
                        if (b.year.toString() === data.year.toString()) {
                            bardatasalary[index].December += data.December;
                            return true
                        }
                    })
                    if (checkarray===undefined) {
                        bardatasalary.push(data);
                        bardataprofit.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                        bardataloss.push(new BarData(yearcurr, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
                    }
                }
                break;
        }
        if (checkarray === undefined) {
            let htmlinput = `<input class="input-combobox" name="combo" type="radio" id="` + yearcurr + `" checked="false">
                            <label for="` + yearcurr + `" id="label` + yearcurr + `" class="option">` + yearcurr + `</label>`
            sum = document.getElementsByClassName('select')[0]
            sum.insertAdjacentHTML('afterbegin', htmlinput);
        }
    }
    bardataprofit = bardataprofit.sort(function (a, b) {
        return a.year - b.year
    });
    bardataloss = bardataloss.sort(function (a, b) {
        return a.year - b.year
    });
    bardatasalary = bardatasalary.sort(function (a, b) {
        return a.year - b.year
    });


    for (i = 0; i < bardataprofit.length; i++) {
        years.push(bardataprofit[i].year);
    }
    currbudgte = 0;
    var profitmonth, lossmonth, salarymonth;
    for (i = 0; i < years.length; i++) {
        bardataprofit.find((b, index) => {
            if (b.year.toString() === years[i].toString()) {
                var temp = Object.values(bardataprofit[index]);
                profitmonth = temp;
                temp = Object.values(bardataloss[index]);
                lossmonth = temp;
                temp = Object.values(bardatasalary[index]);
                salarymonth = temp;
                return true;
            }
        })
        var difference = [];
        difference.push(profitmonth[0])
        for (j = 1; j < profitmonth.length; j++) {
            currbudgte += (parseFloat(profitmonth[j]) + parseFloat(lossmonth[j] + parseFloat(salarymonth[j])));
            difference.push(currbudgte);
        }
        budget.push(difference);
    }
    let htmlinput = `<input class="input-combobox" name="combo" type="radio" id="AllTime" checked="false">
                            <label for="AllTime" id="labelAllTime" class="option">За все время</label>`
    sum = document.getElementsByClassName('select')[0]
    sum.insertAdjacentHTML('afterbegin', htmlinput);
}

async function getFinances() {
    return new Promise((resolve) => {
        fetch(url + 'organization/' + ID + '/operation/', {
            method: 'GET',
            mode: 'cors'
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                var finance
                for (var i in data.data) {
                    delete data.data[i].organization_id
                    finance = Object.assign(data.data[i])
                    finance.date_operation = finance.date_operation.toString().substring(0, finance.date_operation.toString().length - 10);
                    financesIDS.push(data.data[i].id_operations)
                    finances.push(finance);
                }
                fkeyarray.splice(0, fkeyarray.length);
                addRows(finances, financesIDS, "example1")
                resolve()
            })
            .catch(error => console.log(error))
    })
}

function AddFinance() {
    try {
        var descoper = document.getElementById("DescriptionFinances").value
        var dateoper = document.getElementById("DateFinance").value
        var summoper = document.getElementById("SummFinance").value

        financeforpost = new Finance(null, summoper, dateoper, descoper, null)
        body = JSON.stringify(financeforpost)

        if (descoper !== "" && dateoper !== "" && summoper !== "") {
            var urlforinsert = url + 'organization/' + ID + '/operation/';
            fetch(urlforinsert, {
                method: "POST",
                mode: 'cors',
                body: body
            })
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    console.log(data.message);
                    if (data.message === undefined)
                        window.location = window.location;
                })
                .catch(error => alert(error))
        } else
            alert("Заполните поля для добавления")
    } catch (error) {
        console.log(error)
    }
}

function EditFinance() {
    if (selectedindex !== null) {
        var descoper = document.getElementById("DescriptionFinances").value
        var dateoper = document.getElementById("DateFinance").value
        var summoper = document.getElementById("SummFinance").value

        financeforpost = new Finance(null, summoper, dateoper, descoper, null)
        body = JSON.stringify(financeforpost)

        if (descoper !== "" && dateoper !== "" && summoper !== "" && selectedindex !== 0) {
            var urlforinsert = url + 'organization/' + ID + '/operation/' + selectedindex.toString();
            fetch(urlforinsert, {
                method: "PUT",
                mode: 'cors',
                body: body
            })
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    console.log(data.message)
                    if (data.message === 'Успешное изменение данных')
                        window.location = window.location;
                })
                .catch(error => alert(error))
        } else
            alert("Заполните поля для добавления")
    } else
        alert("Выберите строку для изменения")
}

function getOrganization(ID) {
    fetch(url + 'organization/' + ID, {
        method: "GET",
        mode: 'cors'
    })
        .then(res => {
            return res.json()
        })
        .then(data => {
            orgsaved = Object.assign(new Organization(), data);
            orgsaved.date_foundation = orgsaved.date_foundation.toString().substring(0, orgsaved.date_foundation.toString().length - 10);
            SaveOrg();
        })
        .catch(error => console.log(error))
}

function SaveOrg() {
    orgsaved.budget = currbudgte;
    body = JSON.stringify(orgsaved)
    fetch(url + 'organization/' + ID, {
        method: "PUT",
        mode: 'cors',
        body: body
    })
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => console.log(error));
}

function getEmployees() {
    let index = 0;
    console.log(departs);
    for (i = 0; i < departs.length; i++) {
        fetch(url + 'organization/' + ID + '/department/' + departs[i].id_department + '/employee/', {
            method: 'GET',
            mode: 'cors'
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                var employee
                for (var j in data.data) {
                    employee = Object.assign(data.data[j])
                    employee.date_birth = employee.date_birth.toString().substring(0, employee.date_birth.toString().length - 10);
                    employees.push(employee);
                }
                if (index === departs.length - 1) {
                    getEmployeePosts();
                }
                index++;
            })
            .catch(error => function () {
                console.log(error)
            })
    }
    console.log(employees);
}

function getDeparts() {
    fetch(url + 'organization/' + ID + '/department/', {
        method: 'GET',
        mode: 'cors'
    })
        .then(res => {
            return res.json()
        })
        .then(data => {
            var department
            for (var i in data.data) {
                delete data.data[i].organization_id
                department = Object.assign(data.data[i])
                departs.push(department);
            }
            getPosts();
            getEmployees();
        })
        .catch(error => console.log(error))
}

function getEmployeePosts() {
    for (let i = 0; i < employees.length; i++) {
        var department = departs.find(dep => dep.id_department.toString() === employees[i].department_id.toString()).id_department

        fetch(url + 'organization/' + ID + '/department/' + department.toString() + '/employee/' + employees[i].id_employee.toString() + '/emplpost/', {
            method: "GET",
            mode: 'cors'
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                var posts;
                for (var i in data.data) {
                    posts = Object.assign(data.data[i]);
                    emplposts.push(posts);
                }
            })
    }
}

function getPosts() {
    fkeyarray.splice(0, fkeyarray.length);
    for (let i = 0; i < departs.length; i++) {
        fetch(url + 'organization/' + ID + '/department/' + departs[i].id_department.toString() + '/post/', {
            method: "GET",
            mode: 'cors'
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                var post;
                if (data !== null) {
                    for (var j in data.data) {
                        post = Object.assign(data.data[j]);
                        posts.push(post);
                    }
                }
            })
    }
}


function CountSalary() {
    let summoperation = 0;
    for (i = 0; i < emplposts.length; i++) {
        var salary = posts.find(p => p.id_post.toString() === emplposts[i].post_id.toString()).salary;
        summoperation += parseFloat(salary);
    }
    summoperation = roundNumber(summoperation, 2);
    console.log(summoperation);
    const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ];
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    console.log(today);
    var operation = new Finance(null, parseFloat(summoperation.toString()) * (-1), today, "Зарплата сотрудников за " + monthNames[parseInt(mm) - 1], null);
    console.log(operation)

    body = JSON.stringify(operation)

    var urlforinsert = url + 'organization/' + ID + '/operation/';
    fetch(urlforinsert, {
        method: "POST",
        mode: 'cors',
        body: body
    })
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data.message);
            if (data.message === undefined)
                window.location = window.location;
        })
        .catch(error => alert(error))
}

function roundNumber(number, digits) {
    var multiple = Math.pow(10, digits);
    var rndedNum = Math.round(number * multiple) / multiple;
    return rndedNum;
}

function DeleteRow(no) {
    window.Bridge.openDialog(url + 'organization/' + ID + '/operation/' + no.toString(), "DeleteOperation", './pages/finances.html')
}