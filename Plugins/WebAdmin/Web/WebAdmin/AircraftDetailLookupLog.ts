﻿namespace VRS.WebAdmin.AircraftDetailLookupLog
{
    import ViewJson = VirtualRadar.Plugin.WebAdmin.View.AircraftOnlineLookupLog;

    interface Model extends ViewJson.IViewModel_KO
    {
    }

    export class PageHandler
    {
        private _Model: Model;
        private _ViewId = new ViewId('AircraftDetailLookupLog');

        constructor()
        {
            this.refreshState();
        }

        refreshState()
        {
            this._ViewId.ajax('GetState', {
                success: (data: IResponse<ViewJson.IViewModel>) => {
                    this.applyState(data);
                    setTimeout(() => this.refreshState(), 1000);
                },
                error: () => {
                    setTimeout(() => this.refreshState(), 5000);
                }
            }, false);
        }

        private applyState(state: IResponse<ViewJson.IViewModel>)
        {
            if(this._Model) {
                ko.viewmodel.updateFromModel(this._Model, state.Response);
            } else {
                this._Model = ko.viewmodel.fromModel(state.Response, {
                    arrayChildId: {
                        '{root}.LogEntries': 'Icao'
                    }
                });
                ko.applyBindings(this._Model);
            }
        }
    }
}
