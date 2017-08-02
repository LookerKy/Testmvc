package com.skuniv.mvc.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.skuniv.mvc.dao.memberDao;


@Service("LoginService")
public class LoginService {
	@Resource(name = "memberDao")
	private memberDao mDao;
	
	public List<Map<String, Object>> selectMemberAll()throws Exception{
		return mDao.selectMemberAll();
	}
	
	public void insertMember(Map<String,Object>map){
		mDao.insertMember(map);
	}
	
	public List<Map<String,Object>>matchMemberPassword() throws Exception{
		return mDao.matchMemberPassword();
	}
}
