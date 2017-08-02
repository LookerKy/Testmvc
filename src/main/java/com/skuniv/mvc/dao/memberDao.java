package com.skuniv.mvc.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.skuniv.mvc.query.QueryList;

@SuppressWarnings("unchecked")
@Repository("memberDao")
public class memberDao extends QueryList{
	
	//ȸ�� ���
	public List<Map<String, Object>> selectMemberAll(){
		return (List<Map<String,Object>>)selectList("member.selectMemberAll");
	}
	
	//ȸ������
	public void insertMember(Map<String,Object>map){
		insert("member.insertMember",map);
	}
	
	//ȸ��Ż�� 
	public void deleteMember(String studentId){
		
		delete("member.deleteMember",studentId);
	}
	
	public List<Map<String,Object>> matchMemberPassword(){
		return (List<Map<String,Object>>)selectList("member.matchMemberPassword");
	}
}
