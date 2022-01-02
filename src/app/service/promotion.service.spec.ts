import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Promotion } from '../model/promotion';
import { PromotionService } from './promotion.service';

let httpClientSpy: jasmine.SpyObj<HttpClient>;
let promotionService: PromotionService;

beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    promotionService = new PromotionService(httpClientSpy);
  });

  it('should return expected promotions (HttpClient called once)', (done: DoneFn) => {
    const expectedPromotions: Promotion[] =
      [{ promoId: 'P101', promoName: 'Lays' , promoDesc: 'Sour Cream Lays', departmentId: 'D01', departmentName: 'Grocery',
      promoListPrice: '12.00' , promoDiscPrice: '10.00', promoImg: 'imageurl'},
       ];
  
    httpClientSpy.get.and.returnValue(of(expectedPromotions));
  
    promotionService.getPromotionsByDeptId('D01').subscribe(
      actualPromotions => {
        expect(actualPromotions).toEqual(expectedPromotions, 'expected promotions');
        done();
      },
      done.fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

