import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ITema } from 'app/shared/model/tema.model';

type EntityResponseType = HttpResponse<ITema>;
type EntityArrayResponseType = HttpResponse<ITema[]>;

@Injectable({ providedIn: 'root' })
export class TemaService {
    private resourceUrl = SERVER_API_URL + 'api/temas';

    constructor(private http: HttpClient) {}

    create(tema: ITema): Observable<EntityResponseType> {
        return this.http.post<ITema>(this.resourceUrl, tema, { observe: 'response' });
    }

    update(tema: ITema): Observable<EntityResponseType> {
        return this.http.put<ITema>(this.resourceUrl, tema, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<ITema>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<ITema[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
